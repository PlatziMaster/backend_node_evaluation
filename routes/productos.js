const express = require('express');
const {productsMock} = require('../utils/products');

function productsApi(app) {
    const router = express.Router();
    app.use('/api/products', router);

    router.get('/', async function(reg, res, next) {
        try {
            const products = await Promise.resolve(productsMock);

            res.status(200).json({
                data: products,
                message: 'products listed'
            });
        }catch(err){
            next(err);
        }
    });

    router.get('/:productId', async function(reg, res, next) {
        try {
            const products = await Promise.resolve(productsMock[0]);

            res.status(200).json({
                data: products,
                message: 'product retrieved'
            });
        }catch(err){
            next(err);
        }
    });

    router.post('/', async function(reg, res, next) {
        try {
            const createdProductId = await Promise.resolve(productsMock[0].id);

            res.status(200).json({
                data: createdProductId,
                message: 'product created'
            });
        }catch(err){
            next(err);
        }
    });

    router.put('/:productId', async function(reg, res, next) {
        try {
            const updatedProductId = await Promise.resolve(productsMock[0].id);

            res.status(201).json({
                data: updatedProductId,
                message: 'product updated'
            });
        }catch(err){
            next(err);
        }
    });

    router.delete('/:productId', async function(reg, res, next) {
        try {
            const deletedProductId = await Promise.resolve(productsMock[0].id);

            res.status(200).json({
                data: deletedProductId,
                message: 'products deleted'
            });
        }catch(err){
            next(err);
        }
    });
}

module.exports = productsApi;

