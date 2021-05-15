// Capa encargada de recirbir peticiones http y enviarlos al controlador
const express = require('express');
const router = express.Router();
const response = require('../../network/response');

// Rutas de los mensajes
router.get('/', function (req, res) {
    response.success(req, res, 'Listado de productos');
});

router.get('/:id', function (req, res) {
    response.success(req, res, 'Obtener un producto');
})

router.post('/', function (req, res) {
    response.success(req, res, 'Producto creado correctamente', 201);
})

router.put('/:id', function (req, res) {
    response.success(req, res, 'Producto actualizado');
});

router.delete('/:id', function (req, res) {
    response.success(req, res, 'Producto Eliminado');
})


module.exports = router;