const boom = require('boom');
const { config } = require('../../config');

function withErrorStack(err, stack) {
    if(config.dev) return {...err, stack}
    else return {...err}
}

function logErrors(err, req, res, next) {
    console.log(err.stack);
    next(err);
}

function wrapErrors(err, req, res, next) {
    if (!err.isBoom) {
        next(boom.badImplementation(err))
    }
    next(err);
}

function clientErrorHandler(err, req, res, next) {
   const {
        output: {statusCode, payload}
   } = err;
   res.status(statusCode).json(withErrorStack(payload, err.stack))
}

module.exports = {
    logErrors,
    wrapErrors,
    clientErrorHandler
};