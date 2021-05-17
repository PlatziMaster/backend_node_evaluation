const products = require("../components/products/network");
const categories = require("../components/categories/network");
//cree una carpeta llamada componestes, en esta carpeta manejaré cada servicio separado en carpetas
const routes = (server) => {
      server.use('/api/products/',products);
      server.use('/api/categories/',categories);
}
module.exports = routes