const boom = require("@hapi/boom");

const { config } = require("../../config");

function whitErrorStack(err, stack) {
  if (config.dev) {
    return { ...err, stack };
  }
  return err;
}

function logErrors(err, req, res, next) {
  console.log(err);
  next(err);
}

function wrapErrors(err, req, res, next) {
  if (!err.isBoom) {
    next(boom.badImplementation(err));
  }
  next(err);
}

function errorHandler(err, req, res, next) {
  const {
    output: { statusCode, payload },
  } = err;
  res.status(statusCode);
  res.json(whitErrorStack(payload, err.stack));
}

module.exports = {
  logErrors,
  errorHandler,
  wrapErrors,
};
