const express = require('express');
const router = express.Router();

const Product = require('../models/product.js');

router.get('/', async (req, res) => {
    const product =  await Product.find();
    console.log(product);
    res.render('index', {
        product
    });
});

router.post('/add', async (req, res) =>{
    const product =  new Product(req.body);
    await product.save();
    res.redirect('/');
});

router.get('/edit/:id', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.render('edit', {
        product
    });
});

router.post('/edit/:id', async(req, res) => {
    const { id } = req.params;
    await Product.update({_id: id}, req.body);
    res.redirect('/');
});

router.get('/delete/:id', async (req, res) => {
    const { id } = req.params;
    await Product.remove({_id: id});
    res.redirect('/');
});

module.exports = router;


