/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
const boom = require("@hapi/boom");
const { config } = require("../config");

const error = (error, stack) => {
    if (config.dev) {
        return { ...error, stack };
    }
    return error;
};

const logErrors = (err, req, res, next) => {
    console.error(err);
    next(err);
};

const wrapErrors = (err, req, res, next) => {
    if (!err.isBoom) {
        next(boom.badImplementation(err));
    }
    next(err);
};

const errorHandler = (err, req, res, next) => {
    const {
        output: { statusCode, payload },
    } = err;
    res.status(statusCode);
    res.json(error(payload, err.stack));
};

module.exports = {
    logErrors,
    errorHandler,
    wrapErrors,
};
