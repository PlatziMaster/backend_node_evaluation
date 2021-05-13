const { Router } = require('express')
const router = Router()


const {
    getAllProduct,
    createNewProduct,
    getProduct,
    editProduct,
    deleteProduct
} = require('../controllers/productController')


router.get('/api/products/', getAllProduct)
router.get('/api/products/:id/', getProduct)
router.post('/api/products/', createNewProduct)
router.put('/api/products/:id/', editProduct)
router.delete('/api/products/:id/', deleteProduct)

module.exports = router