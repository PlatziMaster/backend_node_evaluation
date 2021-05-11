const express = require('express');
const ProductService = require('../Service/ProductService')


function productRoutes(app) {
    const router = express.Router();
    const productService = new ProductService();
    app.use('/api/products', router);

    router.get('/', async function(req, res, next) {
        try {
            const products = await productService.getProducts();
            res.status(200).json(products);
        } catch(error) {
            next(error);
        }
    })

    router.post('/', async function(req, res, next) {
        try {
            const product = await productService.createProduct(req.body);
            res.status(200).json(product);
        } catch(error) {
            next(error);
        }
    })
}

module.exports = productRoutes;