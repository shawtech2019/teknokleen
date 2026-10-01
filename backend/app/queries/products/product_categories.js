const pcQueries = {
    checkExists: (data)=> `SELECT * FROM product_categories WHERE product_id = '${data[0]}' AND category_id = '${data[1]}'`,
    getCategoriesProuctsCount: (data)=> `SELECT COUNT(*) as count FROM product_categories WHERE category_id = '${data[0]}'`,
    getCategoriesProucts: (data)=> `SELECT products.id, products.price, products.image, products.slug, products.short_description, products.name FROM product_categories LEFT JOIN products ON product_categories.product_id = products.id WHERE category_id = '${data[0]}'`,
    createPC: (data)=> `INSERT INTO product_categories (product_id, category_id) VALUES ('${data[0]}', '${data[1]}')`,
};
  
  module.exports = pcQueries;
  