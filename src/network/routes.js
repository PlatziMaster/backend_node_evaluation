const categories = require( '../components/categories/network');
const products = require( '../components/products/network');

const routes = function(server){
    server.use('/api/categories', categories);
    server.use('/api/products', products);
}

module.exports = routes;