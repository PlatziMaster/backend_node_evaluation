const { Router } = require('express')
const router = Router()

const {
    renderCategoriesAdd, 
    renderAllCategories,
    renderViewCategory,
    createNewCategory,
    renderEditCategory,
    updateCategory,
    deleteCategory,
    allProductsForCategory
} = require('../controllers/categories.controller')

// All Categories -GET
router.get('/api/categories/', renderAllCategories)

// New category Form -GET
router.get('/api/categories/new', renderCategoriesAdd)

// Create New Category -POST
router.post('/api/categories/', createNewCategory)

// Edit Category Form -GET
router.get('/api/categories/edit/:id', renderEditCategory)

// View Category -GET
router.get('/api/categories/:id', renderViewCategory)

// Update Category -PUT
router.put('/api/categories/:id', updateCategory)

// Delete Category -DELETE
router.delete('/api/categories/:id', deleteCategory)

// All Products For Category -GET
router.get('/api/categories/:id/products', allProductsForCategory)

module.exports = router

//### CRUD de categorías
//- [ ] GET `/api/categories/` Endpoint para retornar la lista de categorías.
////- [ ] GET `/api/categories/{id}/` Endpoint para retornar un categoría.
////- [ ] POST `/api/categories/` Endpoint para crear un categoría.
//- [ ] PUT `/api/categories/{id}/` Endpoint para modificar un categoría.
////- [ ] DELETE `/api/categories/{id}/` Endpoint para eliminar un categoría.
//- [ ] GET `/api/categories/{id}/products` Endpoint para retornar la lista de productos que pertenecen a una categoría.