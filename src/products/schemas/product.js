const joi = require("@hapi/joi");

const productIdSchema = joi.string().regex(/^[0-9a-fA-F]{24}$/);
const productNameSchema = joi.string();
const productPriceSchema = joi.number().min(0);
const productDescriptionSchema = joi.string().max(300);
const productCategoryIdSchema = joi.string().regex(/^[0-9a-fA-F]{24}$/);
const productImageSchema = joi.string().uri();

const createProduct = {
  name: productNameSchema.required(),
  price: productPriceSchema.required(),
  description: productDescriptionSchema,
  categoryId: productCategoryIdSchema,
  image: productImageSchema,
};

const updateProduct = {
  name: productNameSchema,
  price: productPriceSchema,
  description: productDescriptionSchema,
  categoryId: productCategoryIdSchema,
  image: productImageSchema,
};

module.exports = {
  productIdSchema,
  createProduct,
  updateProduct,
};
