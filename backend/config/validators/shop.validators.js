const Joi = require("joi");

const checkoutValidator = Joi.object({
  name: Joi.string().required(),
});

module.exports = { checkoutValidator };
