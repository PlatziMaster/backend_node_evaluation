const express = require('express')
const router = express.Router()
const apiProductsController = require('../../controllers/api/productController')

router.get('/', apiProductsController.list )
router.get('/:productId', apiProductsController.show )
router.post('/', apiProductsController.store )
router.put('/:productId', apiProductsController.update )
router.delete('/:productId', apiProductsController.destroy )

module.exports = router