const express = require('express');
const router = express.Router();

const Product = require('../models/product');
const Category = require('../models/product'); 

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

router.get('/',async (req, res) => {
    const category = new Category(req.body);
    await category.save();
    res.redirect('/'); 
});

router.get('/edit/:id', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.render('edit', {
        product
    });
});

router.get('/edit/:id', async (req, res) =>{
    const { id } = req-params;
    const category = await Category.findById(id);
    res.render('edit', {
        category
    });
});

router.post('/upload',(req,res) => {
    const file = req.files.file;
    file.mv(`./files/${file.name}`, err => {
        if(err) return res.status(500).send({msg: err});
        
        return res.status(200).send({msg: 'File Uploaded'});
    });
})

router.post('/edit/:id', async(req, res) => {
    const { id } = req.params;
    await Product.update({_id: id}, req.body);
    res.redirect('/');
});

router.post('/edit/:id', async (req, res) => {
    const { id } = req.params;
    await Category.update({_id: id}, req.body);
    res.redirect('/');
});

router.get('/delete/:id', async (req, res) => {
    const { id } = req.params;
    await Product.remove({_id: id});
    res.redirect('/');
});

router.get('/delete/:id', async (req, res) => {
    const { id } = req.params;
    await Category.remove({_id: id})
    res.redirect('/');
});

module.exports = router;


