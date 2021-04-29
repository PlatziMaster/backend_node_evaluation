const Joi = require('joi');

exports.createCategorySchema = Joi.object({
    name: Joi.string().required(),
    image: Joi.string().required()
});

exports.updateCategorySchema = Joi.object({
    name: Joi.string(),
    image: Joi.string(),
})