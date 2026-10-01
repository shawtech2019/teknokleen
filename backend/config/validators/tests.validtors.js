const Joi = require("joi");

const validateCreateTest = Joi.object({
  lastname: Joi.string().required(),
  firstname: Joi.string().required(),
  address: Joi.string().required(),
  city: Joi.string().required(),
});

module.exports = { validateCreateTest };
