//Declaration of variables
const express = require('express')
const router = express.Router()
const api_products_controller = require('../../controllers/api/product_controller')

//Router settings
router.get('/', api_products_controller.list )
router.get('/:productId', api_products_controller.show )
router.post('/', api_products_controller.store )
router.put('/:productId', api_products_controller.update )
router.delete('/:productId', api_products_controller.destroy )

module.exports = router
