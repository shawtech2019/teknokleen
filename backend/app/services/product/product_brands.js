const db = require("../../../config/pg");
const pbQueries = require("../../queries/products/product_brands");
class PBService {
  static async CheckExists(data) {
    const q = await db(pbQueries.checkExists(data));
    console.log("Quering database to check if pc exists");
    return q;
  }

  static async createPB(data) {
    console.log("Quering database to create product BRAND");
    db(pbQueries.createPB(data))
    .then((d)=> {return d;});
  }

  static async getProductBrand(data) {
    console.log("Quering database to get product category");
    const query = pbQueries.getBrandsProucts(data);
    const d = await db(query);
    return d;
  }
  
  static async getBrandProuctsCount(data) {
    console.log("Quering database to get product category");
    const query = pbQueries.getBrandsProuctsCount(data);
    const d = await db(query);
    return d;
  }
  
}
module.exports = PBService;
