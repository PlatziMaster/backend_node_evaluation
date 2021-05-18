const boom = require("@hapi/boom");
const joi = require("joi");
/*function validate(data, schema) {
  const {error} = joi.valid
  return false;
}*/
function validate(data, schema) {
  // If schema is not a joi schema convert to a joi schema object otherwise return schema
  schema = !joi.isSchema(schema) ? joi.object(schema) : schema;
  const { error } = schema.validate(data);
  return error;
}

function validationHandler(schema, data = "body") {
  return function (req, res, next) {
    const error = validate(req[data], schema);
    error ? next(boom.badRequest(error)) : next();
  };
}
module.exports = validationHandler;
