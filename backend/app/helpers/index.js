const { StatusCodes } = require("http-status-codes");

function invalidRoute(req, res) {
  return res.status(StatusCodes.NOT_FOUND).json({ message: "Route not exist" });
}

module.exports = { invalidRoute };
