const express = require('express');
const { reset } = require('nodemon');
const router = express.Router();
//Products model 
const Products = require('../../models/Products');

//@routes Get api/products
//@desc Get all products
router.get('/', async (req, res) => {
    try {
        const products = await Products.find();
        if(!Products) throw Error('No Items');
        res.status(200).json(Products);
    }catch(err) {
        res.status(400).json({mesg: err})
    }
});

//@routes Show api/Products/:id
//@desc Show a product
router.get('/:id', async (req, res) => {
    try {
        const products = await Products.findById(req.params.id);
        if(!products) throw Error('No Items');
        res.status(200).json(products);
    }catch(err) {
        res.status(400).json({mesg: err})
    }
});

//@routes Product api/Products
//@desc Create a product 

router.post('/', async (req, res) => {
    const newPost = new Products(req.body);

    try {
        const products = await newPost.save();
        if(!products) throw Error('Ocurrio un error con la creación del producto')
        res.status(200).json(products);
    } catch {
        res.status(400).json({msg: error})
    }
});

//@routes Delete api/Products/:id
//@desc Delete a product
router.delete('/:id', async (req, res) => {
    try {
        const products = await Products.findByIdAndDelete(req.params.id);
        if(!products) throw Error('Producto no encontrado');
        res.status(200).json({success: true})
    }catch(err) {
        res.status(400).json({msg: error})
    }
});

//@routes Update api/Products/:id
//@desc Update a product
router.patch('/:id', async (req, res) => {
    try {
        const products = await Products.findByIdAndUpdate(req.params.id, req.body);
        if(!products) throw Error('Algo salio mal con la actualización del producto');
        res.status(200).json({success: true});
    }catch(err) {
        res.status(400).json({msg:err});
    }
});


module.exports = router;