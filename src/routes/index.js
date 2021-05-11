const express = require('express');
const router = express.Router();

const Product = require('../models/product.js');

router.get('/', (req, res) => {
    res.render('index');
});

router.post('/add', (req, res) =>{
    console.log(new Product());
    console.log(req.body);
    res.send('Received');
});

module.exports = router;

