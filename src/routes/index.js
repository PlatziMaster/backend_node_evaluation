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

module.exports = router;