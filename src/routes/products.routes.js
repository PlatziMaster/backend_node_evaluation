const { Router } = require('express')
const router = Router()

const { 
    renderProductsAdd, 
    createNewProduct, 
    renderAllProducts,
    renderViewProduct, 
    renderEditProduct,
    updateProduct,
    deleteProduct
} = require('../controllers/products.controller')

// New Product Form -GET
router.get('/api/products/new', renderProductsAdd)

// Create New Product -POST
router.post('/api/products/', createNewProduct)

// All Products -GET
router.get('/api/products/', renderAllProducts)

// View Product -GET
router.get('/api/products/:id', renderViewProduct)

// Edit Product Form -post
router.post('/api/products/edit/:id', renderEditProduct)

// Update Product -PUT
router.put('/api/products/:id', updateProduct)

// Delete Product
router.delete('/api/products/:id', deleteProduct)

module.exports = router
