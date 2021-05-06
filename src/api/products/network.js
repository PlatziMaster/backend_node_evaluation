const express = require('express');
const router = express.Router();
const response = require('../../network/response')
const app = express();

app.use(router);

router.get('/', function (req, res) {
    response.success(req, res, 'Lista de productos');
});

router.get('/id', function (req, res) {
    response.success(req, res, 'Producto especifico');
});

router.post('/', function (req, res) {
    response.success(req, res, 'Producto creado', '201');
});

router.put('/id', function (req, res) {
    response.success(req, res, 'Producto actualizado', '201');
});

router.delete('/id', function (req, res) {
    response.success(req, res, 'Producto eliminado');
});

module.exports = router;
