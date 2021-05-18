const joi = require("joi");
const productIdSchema = joi.string().regex(/^[0-9a-fA-F]{24}$/);
const productNameSchema = joi.string().max(80);
const productPriceSchema = joi.number().min(1).max(100000);
const productDescription = joi.string().max(80);
const productCategoryId = joi.string().regex(/^[0-9a-fA-F]{24}$/);
const productImage = joi.string().max(300);

const createProductSchema = {
  name: productNameSchema.required(),
  price: productPriceSchema,
  description: productDescription,
  categoryId: productCategoryId,
  image: productImage,
};
const updateProductSchema = {
  name: productNameSchema,
  price: productPriceSchema,
  description: productDescription,
  categoryId: productCategoryId,
  image: productImage,
};
module.exports = {
  productIdSchema,
  createProductSchema,
  updateProductSchema,
};
