const Joi = require("joi");

const updateProfileSchema = Joi.object({
  name: Joi.string().min(2).required(),
});

module.exports = {
  updateProfileSchema,
};
