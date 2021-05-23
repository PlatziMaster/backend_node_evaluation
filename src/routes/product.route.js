const { request, response } = require('express');
const express = require('express');
const router = express.Router();

const ProductController = require('../controllers/product.controller');

router.get('/', ProductController.getAllProducts);

router.get('/:id', ProductController.findProductById);

router.post('/', ProductController.createNewProduct);

router.put('/:id', ProductController.updateProduct);

router.delete('/:id', ProductController.deleteProduct);

module.exports = router;