module.exports = (app) => {
    const products = require('../controllers/product.controller.js');

    //  POST /api/products/ Endpoint para crear un producto.
    app.post('/api/products', products.create);

    //  GET /api/products/ Endpoint para retornar la lista de productos.
    app.get('/api/products', products.findAll);

    //  GET /api/products/{id}/ Endpoint para retornar un producto.
    app.get('/api/products/:productId', products.findOne);

    //  PUT /api/products/{id}/ Endpoint para modificar un producto.
    app.put('/api/products/:productId', products.update);

    //  DELETE /api/products/{id}/ Endpoint para eliminar un producto.
    app.delete('/api/products/:productId', products.delete);
}