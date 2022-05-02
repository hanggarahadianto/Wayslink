const Joi = require("joi");

const registerSchema = Joi.object({
  email: Joi.string().email().min(5).required(),
  password: Joi.string().min(5).lowercase().required(),
  name: Joi.string().min(5).lowercase().required(),
});
const loginSchema = Joi.object({
  email: Joi.string().email().min(5).required(),
  password: Joi.string().min(5).lowercase().required(),
});

module.exports = {
  registerSchema,
  loginSchema,
};
