const { Router } = require('express')
const router = Router()

const { 
    renderProductsAdd, 
    createNewProduct, 
    renderAllProducts,
    renderViewProduct, 
    renderEditProduct,
    updateProduct,
    deleteProduct,
    apiRenderAllProducts,
    apiCreateNewProduct,
    apiRenderViewProduct,
    apiUpdateProduct,
    apiDeleteProduct
} = require('../controllers/products.controller')

// New Product Form -GET
router.get('/api/products/new', renderProductsAdd)

// Create New Product -POST
router.post('/products/', createNewProduct)
router.post('/api/products/', apiCreateNewProduct)

// All Products -GET
router.get('/products/', renderAllProducts)
router.get('/api/products/', apiRenderAllProducts)

// View Product -GET
router.get('/products/:id', renderViewProduct)
router.get('/api/products/:id', apiRenderViewProduct)

// Edit Product Form -POST
router.get('/products/edit/:id', renderEditProduct)

// Update Product -PUT
router.put('/products/:id', updateProduct)
router.put('/api/products/:id', apiUpdateProduct)

// Delete Product
router.delete('/products/:id', deleteProduct)
router.delete('/api/products/:id', apiDeleteProduct)

module.exports = router
