const { Router } = require('express')
const { findValidator, createValidator, updateValidator } = require('../data/middleware/categoryValidator')
const { categoryValidator } = require('../data/middleware/productValidator')
const router = Router()

const CategoryController = require('../data/controller/CategoryController')
const ProductController = require('../data/controller/ProductController')

router.get('/', CategoryController.index)
router.route('/:id').get(findValidator, CategoryController.find)
router.route('/').post(createValidator, CategoryController.store)
router.route('/:id').put(updateValidator, CategoryController.update);
router.route('/:id').delete(findValidator, CategoryController.remove)

router.route('/:id/products').get(categoryValidator, ProductController.find_by_category)

module.exports = router