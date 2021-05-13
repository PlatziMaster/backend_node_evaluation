const joi = require("@hapi/joi");

const name = joi.string().max(100);
const image = joi.string().max(100);
const idSchema = joi
    .string()
    .regex(/^[0-9a-fA-F]{24}$/)
    .message("Please provide a valid ID string");

const categoryCreateSchema = {
    name: name.required(),
    image: image.required(),
};

const categoryUpdateSchema = {
    name: name.required(),
    image,
};

module.exports = {
    categoryCreateSchema,
    categoryUpdateSchema,
    idSchema,
};
