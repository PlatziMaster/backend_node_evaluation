const boom = require("@hapi/boom");
const { BAD_REQUEST } = require("http-status");
const { config } = require("../../config");

const withErrorStack = (error, stackError) => {
  console.log(stackError)
  if (config.dev) {
    return { ...error, stackError }; // Object.assign({}, err, stack)
  }
};

const notFoundHandler = (req, res) => {
  const {
    output: { statusCode, payload },
  } = boom.notFound();
  res.status(statusCode).json({ ...payload, url: req.url });
};

const wrapErrors = (err, _req, _res, next) => {
  if (err.statusCode === BAD_REQUEST) {
    return next(boom.badRequest(err));
  }
  if (!err.isBoom) {
    return next(boom.badImplementation(err));
  }
  return next(err);
};

const errorHandler = (err, _req, res, _next) => {
  const {
    output: { statusCode, payload },
  } = err;
  res.status(statusCode);
  res.json(withErrorStack(payload, err));
};

module.exports = {
  wrapErrors,
  errorHandler,
  notFoundHandler,
};
