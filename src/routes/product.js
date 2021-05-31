const express = require('express');
const router = express.Router();
//Controlador
const productController = require('../controllers/productController');

//Endpoint para retornar la lista de productos
router.get('/api/products/',productController.show);

//Endpoint para retornar un producto
router.get('/api/products/:id/',productController.search);

// Endpoint para crear un producto
router.post('/api/products/', productController.create);

//Endpoint para modificar un producto
router.put('/api/products/:id/', productController.update);

//Endpoint para eliminar un producto
router.delete('/api/products/:id/', productController.delete);

module.exports = router;

