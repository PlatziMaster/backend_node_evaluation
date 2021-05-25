const express = require("express");
const router = express.Router();
const {
    getCategories,
    getCategoryById,
    createCategory,
    updateCategory,
    deleteCategory,
    getProductsFromCategory} = require('./categoriesController');

router.get('/', async function(req, res, next) {
    try {
        const categories = await getCategories();
        res.status(200).json([...categories]);
    } catch(e) {
        next(e);
    }
});

router.get('/:id', async function(req, res, next) {
    try {
        const category = await getCategoryById(req);
        res.status(200).json({...category});
    } catch(e) {
        next(e);
    }
});

router.post('/', async function(req, res, next) {
    try {
        const category = await createCategory(req);
        res.status(201).json({_id: category,...req.body,});
    } catch(e) {
        next(e);
    }
    
});

router.put('/:id', async function(req, res, next) {
    try {
        const category = await updateCategory(req);
        res.status(200).json({...category});
    } catch(e) {
        next(e);
    }
});

router.delete('/:id', async function(req, res, next) {
    try {
        await deleteCategory(req);
        res.status(200).json(true);
    } catch(e) {
        next(e);
    }
});

router.get('/:id/products', async function(req, res, next) {
    try {
        const products = await getProductsFromCategory(req);
        res.status(200).json([...products]);
    } catch(e) {
        next(e);
    }
});

module.exports = router;