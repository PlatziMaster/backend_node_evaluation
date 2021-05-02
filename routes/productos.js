const express = require('express');
const {productsMock} = require('../utils/mock_products.json');

function productsApi(app) {
    const router = express.Router();
    app.user('/api/products', router);

    router.get("/", async function(reg, res, next) {
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
}

module.exports = productsApi;

