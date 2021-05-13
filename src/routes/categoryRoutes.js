const { Router } = require('express')
const router = Router()


const {
    getAllCategories,
    createNewCategory,
    getCategory,
    editCategory,
    deleteCategory,
    getProductsFromCategory
} = require('../controllers/categoryController')


router.get('/api/categories/', getAllCategories)
router.get('/api/categories/:id/', getCategory)
router.post('/api/categories/', createNewCategory)
router.put('/api/categories/:id/', editCategory)
router.delete('/api/categories/:id/', deleteCategory)
router.get('/api/categories/:id/products/', getProductsFromCategory)

module.exports = router