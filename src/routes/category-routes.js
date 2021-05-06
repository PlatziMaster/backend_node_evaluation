const express = require('express');
const router = express.Router();

const cc = require('../controllers/category.controller')

router.get('/', cc.getCategories);
router.post('/', cc.createCategory);
router.get('/:id', cc.getCategory);
router.put('/:id', cc.editCategory);
router.delete('/:id', cc.deleteCategory);

module.exports = router;