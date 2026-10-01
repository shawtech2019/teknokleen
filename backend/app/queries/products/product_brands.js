const pbQueries = {
    checkExists: (data)=> `SELECT * FROM product_brands WHERE product_id = '${data[0]}' AND brand_id = '${data[1]}'`,
    createPB: (data)=> `INSERT INTO product_brands (product_id, brand_id) VALUES ('${data[0]}', '${data[1]}')`,
    getBrandsProuctsCount: (data)=> `SELECT COUNT(*) as count FROM product_brands WHERE brand_id = '${data[0]}'`,
    getBrandsProucts: (data)=> `SELECT products.id, products.price, products.image, products.slug, products.short_description, products.name FROM product_brands LEFT JOIN products ON product_brands.product_id = products.id WHERE brand_id = '${data[0]}'`,
  };
  
  module.exports = pbQueries;
  