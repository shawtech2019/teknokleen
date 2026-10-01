const brandQueries = {
    getAllBrands: `SELECT * FROM brands`,
    getBrand: (data)=>`SELECT * FROM brands WHERE slug = '${data[0]}' LIMIT 1`,
    createBrand: (data)=> `INSERT INTO brands
    (name, image, slug) VALUES ('${data[0]}', '${data[1]}', '${data[2]}')`,
  };
  
  module.exports = brandQueries;
  