const joi = require('@hapi/joi');

const categoryIdSchema = joi.string().regex(/^[0-9a-fA-F]{24}$/);
const categoryNameSchema = joi.string().max(80);
const categoryImageSchema = joi.string().uri();


const createCategorySchema = {
    name: categoryNameSchema.required(),
    image: categoryImageSchema.required()
};

  const updateCategorySchema = {
    name: categoryNameSchema.required(),
    image: categoryImageSchema.required()
  };

module.exports = {
    categoryIdSchema,
    createCategorySchema,
    updateCategorySchema
}

