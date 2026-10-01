var mysql = require("mysql2/promise");
const { errorResponse } = require("../app/helpers/response");
require("dotenv").config();

const dbConfig = {
  host: process.env.DATABASE_HOST || "localhost",
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  port: process.env.DATABASE_PORT,
};
// var db = mysql.createConnection(dbConfig);
async function query(sql, params = null) {
  const connection = await mysql.createConnection(dbConfig);
  const res = await connection.execute(sql, params);
  const [results] = res;
  return results;
}

module.exports = { query: query };