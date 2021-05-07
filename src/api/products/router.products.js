const express = require("express");
const router = express.Router();
const validation = require('../../utils/middlewares/validators');
const { deleteProduct, getAllProduct, getProductById, insertProduct, updateProduct } = require('./controllers.products')
const { createProductSchema, updateProductSchema } = require('./schema.product');

router.get('/', async function(req, res, next) {
    try {
        const products = await getAllProduct()
        res.status(200).json([...products]);
    } catch(error) {
        next(error);
    }
});

router.get('/:id', async function(req, res, next) {
    try {
        const product = await getProductById(req)
        res.status(200).json({
            ...product
        });
    } catch(error) {
        next(error)
    }
});

router.post('/', validation(createProductSchema), async function(req, res, next) {
    try {
        const productInserted = await insertProduct(req)
        res.status(201).json({
            _id: productInserted,
            ...req.body,
            message: "Document inserted"
        });
    } catch(error) {
        next(error)
    }
    
});

router.put('/:id', validation(updateProductSchema) , async function(req, res, next) {
    try {
        const product = await updateProduct(req)
        res.status(200).json({
            ...product,
            message: "Document updated"
        });
    } catch(error) {
        next(error)
    }
});

router.delete('/:id', async function(req, res, next) {
    try {
        await deleteProduct(req)
        res.status(200).json(true);
    } catch(error) {
        next(error)
    }
});

module.exports = router;