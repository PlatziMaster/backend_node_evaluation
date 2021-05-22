const store = require('../../models/products');
const ctrl = require('./controller');

module.exports = ctrl(store);
