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

    router.get('/:id', async function(req, res, next){
        const { id } = req.params;
        try {
            const category = await categoryService.getCategory(id);
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

    router.put('/:id', async function(req, res, next) {
        const { id } = req.params;
        const { body : category } = req; 
        console.log(id);
        try {
            const updatedCategoryId = await categoryService.updateCategory(id, {category});
            res.status(200).json(updatedCategoryId);
        } catch(error) {
            next(error);
        }
    })

    router.delete('/:id',async function(req, res, next) {
        const { id } = req.params;
        try {
            const wasDeleted = await categoryService.deleteCategory({id});
            res.status(200).json(wasDeleted);
        } catch(error) {
            next(error);
        }
    })

    router.get(':id/products', async function(req, res, next) {
        const { id } = req.params;
        try {
            const products = await categoryService.getProductsByCategory({id});
            res.status(200).json(products);
        } catch(error) {
            next(error);
        }
    })
}

module.exports = categoryRoutes;