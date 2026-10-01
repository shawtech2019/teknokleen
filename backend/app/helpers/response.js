function errorResponse({ res, status, message, error, statusCode = 500 }) {
  res.status(statusCode).json({ status, message, error, statusCode });
}

async function okResponse({ res, message, status, data, statusCode = 200 }) {
  res
    .status(statusCode)
    .json({ status, message, data: data || {}, statusCode });
}

module.exports = { okResponse, errorResponse };
