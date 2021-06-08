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
    allProductsForCategory,
    apiRenderAllCategories,
    apiCreateNewCategory,
    apiRenderViewCategory,
    apiUpdateCategory,
    apiDeleteCategory,
    apiAllProductsForCategory
} = require('../controllers/categories.controller')

// All Categories -GET
router.get('/categories/', renderAllCategories)
// All Categories -GET -API
router.get('/api/categories/', apiRenderAllCategories)


// New category Form -GET
router.get('/categories/new', renderCategoriesAdd)


// Create New Category -POST
router.post('/categories/', createNewCategory)
// Create New Category -POST
router.post('/api/categories/', apiCreateNewCategory)

// Edit Category Form -GET
router.get('/categories/edit/:id', renderEditCategory)

// View Category -GET
router.get('/categories/:id', renderViewCategory)
// View Category -GET -API
router.get('/api/categories/:id', apiRenderViewCategory)

// Update Category -PUT
router.put('/categories/:id', updateCategory)
// Update Category -PUT -API
router.put('/api/categories/:id', apiUpdateCategory)

// Delete Category -DELETE
router.delete('/categories/:id', deleteCategory)
// Delete Category -DELETE -API
router.delete('/api/categories/:id', apiDeleteCategory)

// All Products For Category -GET
router.get('/categories/:id/products', allProductsForCategory)
// All Products For Category -GET -API
router.get('/api/categories/:id/products', apiAllProductsForCategory)

module.exports = router

//### CRUD de categorías
//- [ ] GET `/api/categories/` Endpoint para retornar la lista de categorías.
////- [ ] GET `/api/categories/{id}/` Endpoint para retornar un categoría.
////- [ ] POST `/api/categories/` Endpoint para crear un categoría.
//- [ ] PUT `/api/categories/{id}/` Endpoint para modificar un categoría.
////- [ ] DELETE `/api/categories/{id}/` Endpoint para eliminar un categoría.
//- [ ] GET `/api/categories/{id}/products` Endpoint para retornar la lista de productos que pertenecen a una categoría.