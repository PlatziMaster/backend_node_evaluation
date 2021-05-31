const express = require('express');
const router = express.Router();
//Controlador
const categoryController = require('../controllers/categoryController');

//Endpoint para retornar la lista de categorías
router.get('/api/categories/',categoryController.show);

//Endpoint para retornar un categoría
router.get('/api/categories/:id/',categoryController.search);

// Endpoint para crear un categoría
router.post('/api/categories/', categoryController.create);

//Endpoint para modificar un categoría
router.put('/api/categories/:id/', categoryController.update);

//Endpoint para eliminar un categoría
router.delete('/api/categories/:id/', categoryController.delete);

//Endpoint para retornar la lista de productos que pertenecen a una categoría.
router.get('/api/categories/:id/products',categoryController.products);

module.exports = router;

