var express = require('express');
var router = express.Router();

const { create, deleteOne, edit, getAll, getOne } = require('./controller');
const { productsByCategory } = require('../product/controller')

router.get('/', getAll);
router.get('/:id', getOne);
router.post('/', create);
router.put('/:id', edit);
router.delete('/:id', deleteOne)
router.get('/:id/products', productsByCategory)

module.exports = router;