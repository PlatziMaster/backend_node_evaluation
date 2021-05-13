const express = require('express');
const Category = require('../models/Category.js');
const router = express.Router();

router.get('/', async (req, res) => {
    const categories = await Category.find();
    res.render('index', {
        categories
    });
});

router.post('/createCategory', async (req, res) => {
   const category = new Category(req.body);
   await category.save();
   res.redirect('/');
});

router.delete('/deleteCategory/:id', async (req, res) => {
    console.log('entra a delete');
    const { id } = req.params;
    await Category.remove({_id: id})
    res.redirect('/');
});
module.exports = router;