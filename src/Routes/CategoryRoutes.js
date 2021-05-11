const express = require('express');
const CategoryService = require('../Service/CategoryService')


function categoryRoutes(app) {
    const router = express.Router();
    const categoryService = new CategoryService();
    app.use('/api/categories', router);

    router.get('/', async function(req, res, next) {
        try {
            const categories = await categoryService.getCategories();
            res.status(200).json(categories);
        } catch(error) {
            next(error);
        }
    })

    router.get('/:categoryId', async function(req, res, next){
        const { categoryId } = req.params;
        try {
            const category = await categoryService.getCategory(categoryId);
            res.status(200).json(category);
        } catch(error) {
            next(error);
        }
    })

    router.post('/', async function(req, res, next) {
        const { body: category} = req;
        try {
            const insertedCategoryId = await categoryService.createCategory({category});
            res.status(201).json(insertedCategoryId);
        } catch(error) {
            next(error);
        }
    })

    router.put('/:categoryId', async function(req, res, next){
        const { categoryId } = req.params;
        const { body: category} = req;
        try {
            const updatedCategoryId = await categoryService.updateCategory({categoryId, category});
            res.status(200).json(updatedCategoryId);
        } catch(error) {
            next(error);
        }
    })

    router.delete('/:categoryId',async function(req, res, next) {
        const { categoryId } = req.params;
        try {
            const deletedCategoryId = await categoryService.deleteCategory({categoryId});
            res.status(200).json(deletedCategoryId);
        } catch(error) {
            next(error);
        }
    })

    router.get(':categoryId/products', async function(req, res, next) {
        const { categoryId } = req.params;
        try {
            const products = await categoryService.getProductsByCategory({categoryId});
            res.status(200).json(products);
        } catch(error) {
            next(error);
        }
    })
}

module.exports = categoryRoutes;