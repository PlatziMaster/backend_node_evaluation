const express = require("express");
const router = express.Router();
const validation = require('../../utils/middlewares/validators');
const {  deleteCategory, getAllCategories, getCategoryById, getProductsByCategory ,insertCategory, updateCategory } = require('./controller.categories')
const { createCategorySchema, updateCategorySchema } = require('./shema.category');

router.get('/', async function(req, res, next) {
    try {
        const products = await getAllCategories()
        res.status(200).json([...products]);
    } catch(error) {
        next(error);
    }
});

router.get('/:id', async function(req, res, next) {
    try {
        const category = await getCategoryById(req)
        res.status(200).json({
            ...category
        });
    } catch(error) {
        next(error)
    }
});

router.get('/:id/products', async function(req, res, next) {
    try {
        const products = await getProductsByCategory(req)
        res.status(200).json([
            ...products
        ]);
    } catch(error) {
        next(error)
    }
})

router.post('/', validation(createCategorySchema), async function(req, res, next) {
    try {
        const categoryInserted = await insertCategory(req)
        res.status(201).json({
            _id: categoryInserted,
            ...req.body,
            message: "Document inserted"
        });
    } catch(error) {
        next(error)
    }
    
});

router.put('/:id', validation(updateCategorySchema) , async function(req, res, next) {
    try {
        const category = await updateCategory(req)
        res.status(200).json({
            ...category,
            message: "Document updated"
        });
    } catch(error) {
        next(error)
    }
});

router.delete('/:id', async function(req, res, next) {
    try {
        await deleteCategory(req)
        res.status(200).json(true);
    } catch(error) {
        next(error)
    }
});

module.exports = router;