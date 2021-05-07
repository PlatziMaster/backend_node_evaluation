const statusMessages = {
    '200': 'Done',
    '201': 'Created',
    '400': 'Invalid format',
    '500': 'Internal error',
};

exports.success = function (req, resp, data, status = 200) {
    const message = statusMessages[status];
    resp.status(status).send({
        error: '',
        data: data || message
    });
};

exports.error = (req, resp, data, status = 500, details) => {
    console.error(`[response error] ${details}`);
    const message = data || statusMessages[status];
    resp.status(status).send({
        error: message,
        data: ''
    });
};
