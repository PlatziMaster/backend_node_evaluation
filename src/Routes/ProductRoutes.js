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

    router.get('/:id', async function(req, res, next){
        const { id } = req.params;
        try {
            const product = await productService.getProduct(id);
            res.status(200).json(product);
        } catch(error) {
            next(error);
        }
    })

    router.post('/', async function(req, res, next) {
        const { body: product} = req;
        try {
            const insertedId = await productService.createProduct({product});
            res.status(201).json(insertedId);
        } catch(error) {
            next(error);
        }
    })

    router.put('/:id', async function(req, res, next){
        const { id } = req.params;
        const { body: product} = req;
        try {
            const updatedproductId = await productService.updateProduct(id, product);
            res.status(200).json(updatedproductId);
        } catch(error) {
            next(error);
        }
    })

    router.delete('/:id',async function(req, res, next) {
        const { id } = req.params;
        try {
            const wasDeleted = await productService.deleteProduct({id});
            res.status(200).json(wasDeleted);
        } catch(error) {
            next(error);
        }
    })
}

module.exports = productRoutes;