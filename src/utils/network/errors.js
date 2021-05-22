const response = require('./response');

function errors(err, req, res, next) {
    console.error('[error]', err);

    const message = err.message || 'Internal Error';
    const status = err.statusCode || 500;

    response.error(req, res, message, status)
    
}

module.exports = errors;