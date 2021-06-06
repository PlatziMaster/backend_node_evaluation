const { Router } = require('express')
const { findValidator, createValidator, updateValidator } = require('../data/middleware/categoryValidator')
const router = Router()

const CategoryController = require('../data/controller/CategoryController')

router.get('/', CategoryController.index)
router.route('/:id').get(findValidator, CategoryController.find)
router.route('/').post(createValidator, CategoryController.store)
router.route('/:id').put(updateValidator, CategoryController.update);
router.route('/:id').delete(findValidator, CategoryController.remove)

router.route('/:id/products').get(findValidator, CategoryController.find_by_products)

module.exports = router