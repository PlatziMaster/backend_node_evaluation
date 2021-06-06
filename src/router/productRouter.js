const { Router } = require('express')
const { findValidator, createValidator, updateValidator } = require('../data/middleware/productValidator')
const router = Router()

const ProductController = require('../data/controller/ProductController')

router.get('/', ProductController.index)
router.route('/:id').get(findValidator, ProductController.find)
router.route('/').post(createValidator, ProductController.store)
router.route('/:id').put(updateValidator, ProductController.update);
router.route('/:id').delete(findValidator, ProductController.remove)

module.exports = router