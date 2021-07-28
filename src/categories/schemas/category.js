const joi = require("@hapi/joi");

const categoryIdSchema = joi.string().regex(/^[0-9a-fA-F]{24}$/);
const categoryNameSchema = joi.string();
const categoryImageSchema = joi.string().uri();

const createCategory = {
  name: categoryNameSchema.required(),
  image: categoryImageSchema.required(),
};

const updateCategory = {
  name: categoryNameSchema,
  image: categoryImageSchema,
};

module.exports = {
  categoryIdSchema,
  createCategory,
  updateCategory,
};
