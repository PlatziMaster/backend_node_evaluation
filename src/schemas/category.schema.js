const joi = require("joi");
const categoryIdSchema = joi.string().regex(/^[0-9a-fA-F]{24}$/);
const categoryNameSchema = joi.string().max(80);
const categoryImage = joi.string().max(300);

const createCategorySchema = {
  name: categoryNameSchema.required(),
  image: categoryImage,
};
const updateCategorySchema = {
  name: categoryNameSchema,
  image: categoryImage,
};
module.exports = {
  categoryIdSchema,
  createCategorySchema,
  updateCategorySchema,
};
