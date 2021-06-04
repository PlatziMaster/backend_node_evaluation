module.exports = (app) => {
    const categories = require('../controllers/category.controller.js');

    //  POST /api/categories/ Endpoint para crear un producto.
    app.post('/api/categories', categories.create);

    //  GET /api/categories/ Endpoint para retornar la lista de productos.
    app.get('/api/categories', categories.findAll);

    //  GET /api/categories/{id}/ Endpoint para retornar un producto.
    app.get('/api/categories/:categoryId', categories.findOne);

    //  PUT /api/categories/{id}/ Endpoint para modificar un producto.
    app.put('/api/categories/:categoryId', categories.update);

    //  DELETE /api/categories/{id}/ Endpoint para eliminar un producto.
    app.delete('/api/categories/:categoryId', categories.delete);

    // GET /api/categories/{id}/products Endpoint para retornar la lista de productos que pertenecen a una categoría.
    app.get('/api/categories/:categoryId/products', categories.getProductsByCategoryId);

}