const express = require('express');
const Category = require('../models/Category.js');
const Product = require('../models/Product.js');
const router = express.Router();

router.get('/', async (req, res) => {
    const categories = await Category.find();
    res.render('index', {
        categories
    });
});

router.get('/categories', async (req, res) => {
    const categories = await Category.find();
    res.render('Category/index', {
        categories
    });
});

router.post('/createCategory', async (req, res) => {
   const category = new Category(req.body);
   await category.save();
   res.redirect('/categories');
});

router.get('/editCategory/:id', async(req, res) => {
    const { id } = req.params;
    const category = await Category.findById(id);
    res.render('category/edit', {
        category
    });
});

router.post('/editCategory/:id', async(req, res) => {
    const { id } = req.params;
    await Category.update({_id: id}, req.body);
    res.redirect('/categories')
});

router.get('/deleteCategory/:id', async (req, res) => {
    const { id } = req.params;
    await Category.remove({_id: id})
    res.redirect('/categories');
});
       

router.get('/products', async (req, res) => {
    const categories = await Category.find();
    const products = await Product.find();

    res.render('Product/index', {
        categories,
        products
    });
});

router.post('/createProduct', async (req, res) => {
    const product = new Product(req.body);
    await product.save();
    res.redirect('/Products');
 });

module.exports = router;