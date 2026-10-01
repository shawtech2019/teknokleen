const { StatusCodes } = require("http-status-codes");
const { errorResponse } = require("../helpers/response");

/**
 * Joi validation of request parameters
 * @param {function} schema - the Joi schema
 * @param {string} type - the request type
 * @returns {object} - Returns an object (error or response).
 * @memberof ModelMiddleware
 */
const validateRequestBody = (schema, type) => async (req, res, next) => {
  try {
    const getType = {
      payload: req.body,
      params: req.params,
      query: req.query,
      headers: req.headers,
      file: req.files,
    };
    const data = getType[type];
    const { correlationId } = req;
    const valid = await schema.validateAsync(data);
    req.body = valid;
    return next();
  } catch (error) {
    const message = error.details[0].message.replace(/["]/gi, "");
    return errorResponse({
      res,
      statusCode: StatusCodes.UNPROCESSABLE_ENTITY,
      message,
      error: message,
    });
  }
};

module.exports = validateRequestBody;
