//Declaration of variables
const express = require('express')
const router = express.Router()
const api_categories_controller = require('../../controllers/api/category_controller')

//Router settings
router.get('/', api_categories_controller.list )
router.get('/:categoryId', api_categories_controller.show )
router.post('/', api_categories_controller.store )
router.put('/:categoryId', api_categories_controller.update )
router.delete('/:categoryId', api_categories_controller.destroy )
router.get('/:categoryId/products', api_categories_controller.list_products )

module.exports = router