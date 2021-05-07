const Joi = require('joi');
const boom = require('boom');

function validationHandler(schema, objectValidate = "body") {
    return function(req, res, next) {
        const { error } = schema.validate(req[objectValidate]);
        error ? next(boom.badRequest(error)) : next()
    }
};

module.exports = validationHandler;