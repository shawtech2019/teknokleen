const ROUTES = {
  GET_PRODUCTS: "/shop/products",
  GET_PRODUCT: "/shop/product/:slug",
  GET_CATEGORIES: "/shop/categories",
  GET_CATEGORY: "/shop/category/:category_id",
  GET_BRANDS : "/shop/brands",
  CHECKOUT : "/shop/checkout",

  GET_TESTS: "/tests",
  CREATE_TESTS: "/tests",
  DELETE_TEST: "/tests/:testid",
  WILD_CARD: "/*",
};

module.exports = ROUTES;