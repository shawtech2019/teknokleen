const Joi = require("joi");

const validateCreateApplication = Joi.object({
  firstname: Joi.string().required(),
  lastname: Joi.string().required(),
  email: Joi.string().required(),
  message: Joi.string().required(),
  // file: Joi.binary().required()
});

const validateCreateApplicationCourse = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phoneNumber: Joi.string().required(),
  title: Joi.string().required(),
  amount: Joi.any().required(),
  amount: Joi.any().required(),
  state : Joi.string().required(),
  ref : Joi.string().required(),
  hearaboutus : Joi.string(),
});

module.exports = { validateCreateApplication, validateCreateApplicationCourse };
