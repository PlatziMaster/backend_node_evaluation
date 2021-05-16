// Capa encargada de recirbir peticiones http y enviarlos al controlador
const express = require('express');
const router = express.Router();
const response = require('../../network/response');

// Integración de la capa de logica de negocios (controlladores)
const productController = require('./productController');

// Rutas de los mensajes
router.get('/', function (req, res) {
    productController.getProducts()
        .then((productsList) => {
            response.success(req, res, productsList, 200);
        })
        .catch(e => {
            response.error(req, res, 'Error en el servidor', 500, e);
        })
});

router.get('/:id', function (req, res) {
    productController.getOneProduct(req.params.id)
        .then((product) => {
            response.success(req, res, product, 200);
        })
        .catch(e => {
            response.success(req, res, 'Error Server', 500, e);
        });
});


router.post('/', function (req, res) {
    productController.addProduct(req.body.name, req.body.price, req.body.description, req.body.categoryId, req.body.image)
        .then((product) => {
            response.success(req, res, product, 201);
        })
        .catch(() => {
            response.error(req, res, 'Información Invalida', 400, 'Error en el controlador');
        })
});

router.put('/:id', function (req, res) {
    productController.updateProduct(req.params.id, req.body.name, req.body.price, req.body.description, req.body.categoryId, req.body.image)
        .then((data) => {
            response.success(req, res, data, 200);
        })
        .catch(e => {
            response.success(req, res, 'Error Server', 500, e);
        });
});

router.delete('/:id', function (req, res) {
    productController.deleteProduct(req.params.id)
        .then(() => {
            response.success(req, res, 'Product deleted', 200);
        })
        .catch(e => {
            response.success(req, res, 'Error Server', 500, e);
        });
});


module.exports = router;