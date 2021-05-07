const Joi = require('joi');

const categorysAllowed = ["608a31b04804e5d724824fe1","608a31e14804e5d724824fe2"];

exports.createProductSchema = Joi.object({
    name: Joi.string().required(),
    price: Joi.number().required(),
    description: Joi.string().required(),
    image: Joi.string().required(),
    categoryId: Joi.string()
});

exports.updateProductSchema = Joi.object({
    name: Joi.string(),
    price: Joi.number(),
    description: Joi.string(),
    image: Joi.string(),
    categoryId: Joi.string()
})