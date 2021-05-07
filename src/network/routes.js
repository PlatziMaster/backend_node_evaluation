const categories = require('../api/categories/network');
const products = require('../api/products/network');

const routes = server => {
    server.use('/api/categories', categories);
    server.use('/api/products', products);
};

module.exports = routes;
