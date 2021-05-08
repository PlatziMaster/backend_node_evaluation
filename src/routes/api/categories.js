const express = require('express')
const router = express.Router()
const apiCategoriesController = require('../../controllers/api/categoryController')

router.get('/', apiCategoriesController.list )
router.get('/:categoryId', apiCategoriesController.show )
router.post('/', apiCategoriesController.store )
router.put('/:categoryId', apiCategoriesController.update )
router.delete('/:categoryId', apiCategoriesController.destroy )
router.get('/:categoryId/products', apiCategoriesController.listProducts )

module.exports = router