const productQueries = {
    getProduct: (data)=> `SELECT * FROM products WHERE slug = '${data[0]}'`,
    getProducts : (data)=> `SELECT * FROM products WHERE name LIKE '%${data[0]}%' LIMIT ${data[2]} OFFSET ${data[1]}`,
    GetProductsCount : (data)=> `SELECT count(*) as count FROM products WHERE name LIKE '%${data[0]}%'`,
    
    create: (data)=> `INSERT INTO products (name, slug, image, price, is_featured, short_description, description, status) VALUES ('${data[0]}', '${data[1]}', '${data[2]}', '${data[3]}', '${data[4]}', '${data[5]}', '${data[6]}', '${data[7]}')`,
};
  
  module.exports = productQueries;
  