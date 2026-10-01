const Joi = require("joi");

const validateCreateContact = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
  message: Joi.string().required(),
});

module.exports = { validateCreateContact };
