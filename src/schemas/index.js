const joi = require("@hapi/joi");

const idSchema = joi
    .string()
    .regex(/^[0-9a-fA-F]{24}$/)
    .message("Please provide a valid ID string");

const name = joi.string().max(100).required();
const image = joi.string().max(100);
const description = joi.string().max(300);
const price = joi.number().required();

const categoryCreateSchema = {
    name,
    image: image.required(),
};

const categoryUpdateSchema = {
    name,
    image,
};

const productCreateSchema = {
    name,
    price,
    image,
    description,
};

const productUpdateSchema = {
    name,
    price,
};

module.exports = {
    categoryCreateSchema,
    categoryUpdateSchema,
    productCreateSchema,
    productUpdateSchema,
    idSchema,
};
