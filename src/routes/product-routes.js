const express = require('express');
const router = express.Router();

const pc = require('../controllers/product.controller')

router.get('/', pc.getProduct);
router.post('/', pc.createProduct);
router.get('/:id', pc.getProduct);
router.put('/:id', pc.editProduct);
router.delete('/:id', pc.deleteProduct);

module.exports = router;