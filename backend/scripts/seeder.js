const { slugify } = require("../app/helpers/slugify");
const BrandService = require("../app/services/brand/brand");
const PCService = require("../app/services/product/product_categories");
const PBService = require("../app/services/product/product_brands");
const ProductService = require("../app/services/product/product");
const Categories = require("./data/categories");
const Brands = require("./data/brands");
const { query } = require("../config/mysql");
const Products = require("./data/products");



async function seedCategory () {
    for (let i = 0; i < Categories.length; i++) {
        const category = Categories[i];
        if(category.status) continue;
        var slug = slugify(category.name);
        category.slug = slug;

        await query(`INSERT INTO categories (name, image, slug) VALUES ('${category.name}', '${category.image}', '${slug}')`);
        console.log("press control/command + C to cancel");
    }
} 

async function seedBrands () {
    Brands.forEach(async (brand, i)=> {
        var slug = slugify(brand.name);
        brand.slug = slug; 
        const b = await BrandService.GetBrand([slug])
        if(b.length == 0){
            await BrandService.createBrand([brand.name, brand.image, slug])
        }
        console.log("press control/command + C to cancel");
    })
} 


async function seedProducts () {
    Products.forEach(async (product, i)=> {
        var slug = slugify(product.name);
        product.slug = slug; 
        var isFeatured = product.is_featured ? 1 : 0;
        var p = await ProductService.GetProduct([slug]);
        if(p.length > 0) return;
        else p = await ProductService.create([
            product.name, slug, product.image, product.price, isFeatured, product.short_description, product.description, "published" 
        ]);
        var product_id = p.insertId;
        if(product.category){
            var categories = product.category;
            categories.forEach(async (cat)=> {
                PCService.createPC([product_id, cat])
            })
        }

        if(product.brand){
            var categories = product.brand;
            categories.forEach(async (cat)=> {
                PBService.createPB([product_id, cat])
            })
        }

        console.log("press control/command + C to cancel");
    })
   
} 

seedCategory(); seedBrands(); seedProducts()