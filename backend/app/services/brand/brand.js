const db = require("../../../config/pg");
const brandQueries = require("../../queries/brand/brand");
class BrandService {
  static async GetBrands() {
    const q = await db(brandQueries.getAllBrands);
    console.log("Quering database to select all test");
    return q;
  }
  static async GetBrand(data) {
    const q = await db(brandQueries.getBrand(data));
    console.log("Quering database to select all a brand with slug");
    return q;
  }

  static async createBrand(data) {
    console.log("Quering database to create brand");
    const q = await db(brandQueries.createBrand(data));
    return q;
  }
}
module.exports = BrandService;
