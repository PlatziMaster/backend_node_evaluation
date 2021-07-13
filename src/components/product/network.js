const express = require('express');
const multer = require('multer');
const router = express.Router();
const controller = require('./controller');
const response = require('../../routes/response');

const upload = multer({
  dest: 'uploads/files'
});

router.get('/', (req, res) => {
  controller.getProducts()
    .then((productList) => {
      response.success(req, res, productList, 200);
    })
    .catch((err) => {
      response.error(req, res, 'Unexpected error', 500, err);
    });
});

router.get('/:id', (req, res) => {
  const filterProduct = req.query.id || null;
  controller.getProduct(filterProduct)
    .then((productList) => {
      response.success(req, res, productList, 200);
    })
    .catch((err) => {
      response.error(req, res, 'Unexpected error', 500, err);
    });
});

router.get('/:id', (req, res) => {
  const filterCat = req.query.category || null;
  constroller.getProdByCat(filterCat)
    .then((productList) => {
      response.success(req, res, productList, 200);
    })
    .catch((err) => {
      response.error(req, res, 'Invalid data', 500, err);
    })
});

router.post('/', upload.single, (req, res) => {
  controller.addProduct(req.body.name, req.body.price, req.body.category, req.body.description, req.file)
    .then((newProduct) => {
      response.success(req, res, newProduct, 201);
    })
    .catch((err) => {
      response.error(req, res, 'Invalid data', 400, 'Controller error:', err);
    });
});

router.put('/:id', (req, res) => {
  controller.updateProduct(req.params.id, req.body.price)
    .then((data) => {
      response.success(req, res, data, 200);
    })
    .catch((err) => {
      response.error(req, res, 'Internal error', 500, err);
    });
});

router.delete('/:id', (req, res) => {
  controller.deleteProduct(req.params.id)
    .then(() => {
      response.success(req, res, `Product ${req.params.id} has been deleted`, 200);
    })
    .catch((err) => {
      response.error(req, res, 'Internal error', 500, err);
    });
});

module.exports = router;