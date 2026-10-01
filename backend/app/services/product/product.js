const db = require("../../../config/pg");
const productQueries = require("../../queries/products/product");
class ProductService {
  static async GetProduct(data) {
    const q = await db(productQueries.getProduct(data));
    console.log("Quering database to select a test");
    return q;
  }

  static async GetProducts(data) {
    const q = await db(productQueries.getProducts(data));
    return q;
  }
  static async GetProductsCount(data) {
  
    const q = await db(productQueries.GetProductsCount(data));
    console.log("Quering database to select products");
    return q;
  }
  
  static async create(data) {
    console.log("Quering database to create  category");
    const query = productQueries.create(data);
    const q = await db(query);
    return q;
  }
}
module.exports = ProductService;
