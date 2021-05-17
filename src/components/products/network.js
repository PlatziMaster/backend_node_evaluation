const express = require('express');
const router = express.Router();
const response = require('../../network/response');
const controller = require('./controller')

router.get('/', function (req, res) {
    const filter =  null;
    controller.getProducts(filter)
        .then((list) => {
            response.success(req, res, list, 200);
        })
        .catch(e => {
            response.error(req, res, 'Unexpexted Error: ', 500, e);
        });

});

router.get('/:id', function (req, res) {
    const filter = {_id: req.params.id} || null;
    controller.getProducts(filter)
        .then((list) => {
            response.success(req, res, list[0], 200);
        })
        .catch(e => {
            response.error(req, res, 'Unexpexted Error: ', 500, e);
        });

});

router.post('/', function (req, res) {
    controller.addProduct(req.body.name,  req.body.price, req.body.description, req.body.categoryId, req.body.image)
        .then(data => {
            response.success(req, res, data, 201);
        })
        .catch(e => {
            response.error(req, res, 'Internal error', 500), e;
        });
});


router.put('/:id', function (req, res) {
    controller.updateProduct(req.params.id, req.body.price)
        .then((data) => {
            response.success(req, res, data, 200);
        })
        .catch(e => {
            response.error(req, res, 'Internal Error', 500, e);
        });
});

router.delete('/:id', function (req, res) {
    controller.deleteProduct(req.params.id)
        .then(() => {
            response.success(req, res, true, 200);
        })
        .catch(e => {
            response.error(req, res, 'Internal Error', 500, e);
        });
});

module.exports = router;