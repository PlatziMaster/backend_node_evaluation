const express = require('express');
const router = express.Router();

const Category = require('../models/categories'); 
const products = require('../models/products');

// return list of products
router.get('api/products', async (req,res) => {
    const products = await Products.find()
    .then((products)=>{
        response.success(req,res,products,200);
    })
    .catch((err) =>{
        response.error(req, res, err.message, 500); 

    });;
    res.send({
        products
    });
});

// return a product
router.get('api/products/:id', async (req,res) => {
    const { id } = req.params;
    const products = await Products.find({_id: id })
    .then((products)=>{
        response.success(req,res,products,200);
    })
    .catch((err) =>{
        response.error(req, res, err.message, 500); 

    });;
    res.send({
        products
    });
});

// Create a product
router.post('api/products/', async (req,res) => {
    const products = new Products(req.body);
    await products.save();
});

// Delete a product
router.delete('api/products/:id', async (req,res) => {
    const { id } = req.params;
    await prodcuts.remove({_id: id});
});

// edit a product
router.put('api/products/:id', async (req,res) => {
    await products.update(req.body);
});

// Return a list of categories
router.get('api/categories/', async (req,res) => {
    const categories = await Category.find()
    .then((categories)=>{
        response.success(req,res,categories,200);
    })
    .catch((err) =>{
        response.error(req, res, err.message, 500); 

    });;
    res.send({
        categories
    });
});

// Return a categori from id
router.get('api/categories/:id', async (req,res) => {
    const { id } = req.params;
    const category = await Category.find({_id: id})
    .then((category)=>{
        response.success(req,res,category,200);
    })
    .catch((err) =>{
        response.error(req, res, err.message, 500); 

    });;
    res.send({
        categories
    });
});

// Create a category
router.post('api/categories/', async (req,res) => {
    const category = new Category(req.body);
    await category.save();
});

// Delete a Category
router.delete('api/categories/:id', async (req,res) => {
    const { id } = req.params;
    await Category.remove({_id: id});
});

// Edit to a category
router.put('api/categories/:id', async (req,res) => {
    await category.update(req.body);
});

module.exports = router;

