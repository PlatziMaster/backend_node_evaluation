const express = require('express');
const router = express.Router();
const response = require('../../network/response');
const controller = require('./controller')
const controllerProducts = require('../products/controller')


router.get('/', function (req, res) {
    const filter = null;
    controller.getCategories(filter)
        .then((list) => {
            response.success(req, res, list, 200);
        })
        .catch(e => {
            response.error(req, res, 'Unexpexted Error: ', 500, e);
        });

});


router.get('/:id', function (req, res) {
        const filter = { _id: req.params.id } || null;
        controller.getCategories(filter)
            .then((list) => {
                response.success(req, res, list[0], 200);
            })
            .catch(e => {
                response.error(req, res, 'Unexpexted Error: ', 500, e);
            });
    


});

router.get('/:id/:filterby', function (req, res) {
    if (req.params.filterby == "products") {
        const filter = { categoryId: req.params.id };
        controllerProducts.getProducts(filter).then((list) => {
            response.success(req, res, list, 200);
        })
        .catch(e => {
            response.error(req, res, 'Unexpexted Error: ', 500, e);
        });
    }
    else{
        response.error(req, res, 'Not Found: ', 404);
    }


});



router.post('/', function (req, res) {
    controller.addCategory(req.body.name, req.body.image)
        .then(data => {
            response.success(req, res, data, 201);
        })
        .catch(e => {
            response.error(req, res, 'Internal error', 500), e;
        });
});


router.put('/:id', function (req, res) {
    controller.updateCategory(req.params.id, req.body.name, req.body.image)
        .then((data) => {
            response.success(req, res, data, 200);
        })
        .catch(e => {
            response.error(req, res, 'Internal Error', 500, e);
        });
});

router.delete('/:id', function (req, res) {
    controller.deleteCategory(req.params.id)
        .then(() => {
            response.success(req, res, true, 200);
        })
        .catch(e => {
            response.error(req, res, 'Internal Error', 500, e);
        });
});

module.exports = router;