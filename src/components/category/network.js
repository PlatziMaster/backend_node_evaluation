// Capa encargada de recirbir peticiones http y enviarlos al controlador
const express = require('express');
const router = express.Router();
const response = require('../../network/response');

// Rutas de los mensajes
router.get('/', function (req, res) {
    response.success(req, res, 'Listado de categorias');
});

router.get('/:id', function (req, res) {
    response.success(req, res, 'Obtener una categoria');
});

router.get('/:id/products', function (req, res) {
    response.success(req, res, 'Listado de productos por categoria');
})


router.post('/', function (req, res) {
    response.success(req, res, 'Creado correctamente', 201);
})

router.put('/:id', function (req, res) {
    response.success(req, res, 'Categoria actualizada');
});

router.delete('/:id', function (req, res) {
    response.success(req, res, 'Categoria Eliminada');
})


module.exports = router;