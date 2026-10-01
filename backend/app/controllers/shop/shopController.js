const { okResponse, errorResponse } = require("../../helpers/response");
const StatusCodes = require("http-status-codes");
const CategoryService = require("../../services/category/category");
const PCService = require("../../services/product/product_categories");
const ProductService = require("../../services/product/product");
const simplePagination = require("../../helpers/pagination");
const BrandService = require("../../services/brand/brand");
const PBService = require("../../services/product/product_brands");
const sendMail = require("../../helpers/sendMail");
const checkoutEmailTemplate = require("../../../config/emailTemplate/checkoutTemplate");
const checkoutEmailTemplateAdmin = require("../../../config/emailTemplate/checkoutTemplateAdmin")
// const checkoutEmailTemplate = require("../../../emailTemplate/checkoutTemplate");
// const checkoutEmailTemplateAdmin = require("../../../emailTemplate/checkoutTemplateAdmin");
require("dotenv").config();


class ShopController {
  static async Categories(req, res) {
   var categories = await CategoryService.GetCategories()
   var data = [];
   for (let i = 0; i < categories.length; i++) {
    const category = categories[i];
    const items = await PCService.getCategoriesProuctsCount([category.id])
    category.items = items ? items[0].count : 0;
    data = [...data, category]
   }

    return okResponse({
      res,
      data : data,
      message : "Categories got",
      status : "success",
      statusCode: StatusCodes.OK,

    })
  }

  static async Category(req, res) {
    const {
      params : {category_id}
    } = req;

    var category = await CategoryService.GetCategory([category_id])
    
     return okResponse({
       res,
       data : category.length > 0 ? category[0] : {},
       message : "Category got",
       status : "success",
       statusCode: category.length > 0 ? StatusCodes.OK : StatusCodes.NOT_FOUND,
 
     })
   }
  
  static async Brands(req, res) {
    var brands = await BrandService.GetBrands()
    var data = [];
    for (let i = 0; i < brands.length; i++) {
     const category = brands[i];
     const items = await PBService.getBrandProuctsCount([category.id])
     category.items = items ? items[0].count : 0;
     data = [...data, category]
    }
 
     return okResponse({
       res,
       data : data,
       message : "brands got",
       status : "success",
       statusCode: StatusCodes.OK,
 
     })
   }
  
  static async Products(req, res) {
    const {
      query : {search = "", limit = 20, page = 1, brand = "", category = "", sortBy="" }
    } = req;
    var sort = sortBy.includes("old") ? "oldest" :(sortBy.includes("newest") ? "newest" : "name")
     let offset = page == 1 ? 0 : (page-1)*limit;

     var products = [];
     var count = 0;

     if(category !== "" || brand !== ""){
      var thisProducts = [];
      var categeoryProducts = [];
      var brandProducts = [];
      if(category !== ""){
        var cat = await CategoryService.GetCategory([category])
        if(cat.length > 0){
          categeoryProducts = await PCService.getProductCategories([cat[0].id])
        }
      }

      if(brand !== ""){
        var b = await BrandService.GetBrand([brand])
        if(b.length > 0){
          brandProducts = await PBService.getProductBrand([b[0].id])
        }
      }

      thisProducts = [...categeoryProducts, ...brandProducts]
      thisProducts = [...new Set(thisProducts)];

      if(search != "") thisProducts = thisProducts.filter(p => p.name.toLowerCase().includes(search.toLowerCase()))
      count = thisProducts.length;
      products = thisProducts.slice(offset, offset+limit)
     }else{
        products = await ProductService.GetProducts([search, offset, limit])
        var  all = await ProductService.GetProductsCount([search])
        count = all[0].count
     }
     console.log('products', products)
    
     return okResponse({
      res,
      data : {
        items : products,
        pagination : simplePagination({count, limit, page})
      },
      message : "Products got",
      status : "success",
      statusCode: StatusCodes.OK,

    })
  }

  static async Product(req, res) {
    const {
      params : {slug }
    } = req;

    const product = await ProductService.GetProduct([slug])
    
    
     return okResponse({
      res,
      data : product,
      message : "Product got",
      status : "success",
      statusCode: StatusCodes.OK,

    })
  }
  static async Checkout(req, res) {
    const {
      body 
    } = req;
    // const formData = req.body;
    const {
      fullname, deliveryAddress, deliveryType, deliverydate, email, telephone, items
    } = body;

    var templatee = checkoutEmailTemplate({
      fullname : fullname,
      deliveryAddress : deliveryAddress,
      deliveryType : deliveryType,
      deliverydate : deliverydate,
      telephone : telephone,
      items : items,
      email : email
    });
    var templateeAdmin = checkoutEmailTemplateAdmin({
      fullname : fullname,
      deliveryAddress : deliveryAddress,
      deliveryType : deliveryType,
      deliverydate : deliverydate,
      telephone : telephone,
      items : items,
      email : email
    });
    // return res.send(templatee).status(200)

    // send email to user
    await sendMail({
      subject : "YOUR ORDER HAS BEEN RECIEVED",
      html : templatee,
      to : email,
    })

    // send email to admin
    const sm = await sendMail({
      subject : "NEW ORDER RECIEVED FROM " + fullname,
      html : templateeAdmin,
      to : process.env.TEKNO_NOTIFY,
    })

    if(sm.error){
     return errorResponse({
        res,
        status : "error",
        statusCode : StatusCodes.BAD_REQUEST,
        message : "Checkout not possible at the moment"
      })
    }

     return okResponse({
      res,
      data : {},
      message : "Your order was recieved successfully",
      status : "success",
      statusCode: StatusCodes.OK,

    })
  }

  
}
module.exports = ShopController;