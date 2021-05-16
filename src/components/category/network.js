// Capa encargada de recirbir peticiones http y enviarlos al controlador
const express = require('express');
const router = express.Router();
const multer = require('multer'); // Componete multer para subir imagenes
const path = require('path'); // componente de ruta
const response = require('../../network/response');

// Integración de la capa de logica de negocios (controlladores)
const categoryController = require('./categoryController');


// Rutas de las categorias
router.get('/', function (req, res) {
    categoryController.getCategories()
        .then((categoryList) => {
            response.success(req, res, categoryList, 200);
        })
        .catch(e => {
            response.error(req, res, 'Error en el servidor', 500, e);
        })
});

router.get('/:id', function (req, res) {
    categoryController.getOneCategory(req.params.id)
        .then((category) => {
            response.success(req, res, category, 200);
        })
        .catch(e => {
            response.success(req, res, 'Error Server', 500, e);
        });
});

router.get('/:id/products', function (req, res) {
    categoryController.getProductsByCategory(req.params.id)
        .then((filterProducts) => {
            response.success(req, res, filterProducts, 200);
        })
        .catch(e => {
            response.success(req, res, 'Error Server', 500, e);
        });

})


router.post('/', function (req, res) {
    categoryController.addCategory(req.body.name, req.body.image)
        .then((fullCategory) => {
            response.success(req, res, fullCategory, 201);
        })
        .catch(() => {
            response.error(req, res, 'Información Invalida', 400, 'Error en el controlador');
        })
})

router.put('/:id', function (req, res) {
    categoryController.updateCategory(req.params.id, req.body.name, req.body.image)
        .then((data) => {
            response.success(req, res, data, 200);
        })
        .catch(e => {
            response.success(req, res, 'Error Server', 500, e);
        });
});

router.delete('/:id', function (req, res) {
    categoryController.deleteCategory(req.params.id)
        .then(() => {
            response.success(req, res, 'Category deleted', 200);
        })
        .catch(e => {
            response.success(req, res, 'Error Server', 500, e);
        });
})


module.exports = router;