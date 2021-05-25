const express = require("express");
const router = express.Router();
const {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
} = require('./productsController');

router.get('/', async function(req, res, next) {
    try {
        const products = await getProducts();
        res.status(200).json([...products]);
    } catch(e) {
        next(e);
    }
});

router.get('/:id', async function(req, res, next) {
    try {
        const product = await getProductById(req);
        res.status(200).json({...product});
    } catch(e) {
        next(e);
    }
});

router.post('/', async function(req, res, next) {
    try {
        const product = await createProduct(req);
        res.status(201).json({_id: product,...req.body,});
    } catch(e) {
        next(e);
    }
    
});

router.put('/:id', async function(req, res, next) {
    try {
        const product = await updateProduct(req);
        res.status(200).json({...product});
    } catch(e) {
        next(e);
    }
});

router.delete('/:id', async function(req, res, next) {
    try {
        await deleteProduct(req);
        res.status(200).json(true);
    } catch(e) {
        next(e);
    }
});

module.exports = router;