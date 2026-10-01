const { Router } = require("express");
const validateRequestBody = require('../helpers/validateRequestBody');
const ROUTES = require("./constants.routes.js");
const shopRoutes = Router();
const ShopController = require("../controllers/shop/shopController.js");
const { catchInternalServerError } = require("../middlewares/catchError.js");
// const { checkoutValidator } = require("../../validators/shop.validators.js");
const { checkoutValidator } = require("../../config/validators/shop.validators.js")
shopRoutes.get(
  ROUTES.GET_PRODUCTS,
  catchInternalServerError(ShopController.Products)
);
shopRoutes.get(
  ROUTES.GET_PRODUCT,
  catchInternalServerError(ShopController.Product)
);

shopRoutes.get(
  ROUTES.GET_CATEGORIES,
  catchInternalServerError(ShopController.Categories)
);
shopRoutes.get(
  ROUTES.GET_CATEGORY,
  catchInternalServerError(ShopController.Category)
);

shopRoutes.get(
  ROUTES.GET_BRANDS,
  catchInternalServerError(ShopController.Brands)
);


shopRoutes.post(
  ROUTES.CHECKOUT,
  catchInternalServerError(ShopController.Checkout)
);


module.exports = shopRoutes;