const categoriesRouter = require("../components/categories/network");
const productsRouter = require("../components/products/network");

const routes = function (server) {
    server.use('/api/categories', categoriesRouter);
    server.use('/api/products', productsRouter);
}

module.exports = routes;