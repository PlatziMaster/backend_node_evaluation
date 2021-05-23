const { request, response } = require('express');
const express = require('express');
const router = express.Router();

const CategoryController = require('../controllers/category.controller');

router.get('/', CategoryController.getAllCategories);

router.get('/:id', CategoryController.findCategoryById);

router.post('/', CategoryController.createNewCategory);

router.put('/:id', CategoryController.updateCategory);

router.delete('/:id', CategoryController.deleteCategory);

router.get('/:id/products', CategoryController.getProductsByCategoryId);

module.exports = router;