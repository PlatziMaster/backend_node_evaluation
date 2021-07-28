const boom = require("@hapi/boom");
const joi = require("@hapi/joi");

function validate(data, schema) {
  const { error } = joi.object(schema).validate(data);
  return error;
}

function validateHandler(schema, check = "body") {
  return (req, res, next) => {
    const error = validate(req[check], schema);

    error ? next(boom.badRequest(error)) : next();
  };
}

module.exports = validateHandler;
