const express = require('express');
const multer = require('multer');
const router = express.Router();
const controller = require('./controller');

router.get('/', async (req, res) => {
  
});


router.post('/add', async (req, res) =>{
  const product =  new Product(req.body);
  await product.save();
  res.redirect('/');
});
