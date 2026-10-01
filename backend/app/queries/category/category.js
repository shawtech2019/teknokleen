const categoryQueries = {
    getAllTest: `SELECT * FROM Persons`,
    GetCategories : `SELECT * FROM categories`,
    
    GetCategory: (data)=> `SELECT * FROM categories WHERE slug = '${data[0]}' LIMIT 1`,
    createCategory: (data)=> `INSERT INTO categories
    (name, image, slug) VALUES ('${data[0]}', '${data[1]}', '${data[2]}')`,
  };
  
  module.exports = categoryQueries;
  