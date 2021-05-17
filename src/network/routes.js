const products = require("../components/products/network");
const categories = require("../components/categories/network");

const routes = (server) => {
      server.use('/api/products/',products);
      server.use('/api/categories/',categories);
}
module.exports = routes