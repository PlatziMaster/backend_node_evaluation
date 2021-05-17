const products = require("../components/products/network");

const routes = (server) => {
      server.use('/api/products/',products);
      //server.use('/api/categories/');
}
module.exports = routes