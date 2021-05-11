const express = require('express');
const ProductService = require('../Service/ProductService')


function productRoutes(app) {
    const router = express.Router();
    const productService = new ProductService();
    app.use('/api/products', router);

    router.get('/', async function(req, res, next) {
        const category = req.query;
        try {
            const products = await productService.getProducts({ category });
            res.status(200).json(products);
        } catch(error) {
            next(error);
        }
    })

    router.get('/:productId', async function(req, res, next){
        const { productId } = req.params;
        try {
            const product = await productService.getProduct(productId);
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

    router.put('/:productId', async function(req, res, next){
        const { productId } = req.params;
        const { body: product} = req;
        try {
            const updatedproductId = await productService.updateProduct({productId, product});
            res.status(200).json(updatedproductId);
        } catch(error) {
            next(error);
        }
    })

    router.delete('/:productI',async function(req, res, next) {
        const { productId } = req.params;
        try {
            const deletedProductId = await productService.deleteProduct({productId});
            res.status(200).json(deletedProductId);
        } catch(error) {
            next(error);
        }
    })
}

module.exports = productRoutes;