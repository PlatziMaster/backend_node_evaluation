
const express = require('express');
const router = express.Router();
const cors = require('cors');
const Product = require('../src/models/Product');
//const Category = require('../src/models/Category');

function createApp() { 
  const app = express();
  app.use(cors());
  app.use(express.json());

//*************Productos*****************//



router.post('/add/producto', async (req, res, next) => {
  const product = new Product(req.body);
  await product.save();
  res.redirect('/');
});

router.get('/api/products/:id', async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  res.render('edit', { product });
});

router.post('/api/products/:id', async (req, res, next) => {
  const { id } = req.params;
  await product.update({ _id: id }, req.body);
  res.redirect('/');
});

router.get('/api/products/delete/:id', async (req, res, next) => {
  let { id } = req.params;
  await Product.remove({ _id: id });
  res.redirect('/');
});



//*************productos*****************//


router.post('/add/producto', async (req, res, next) => {
  const product = new Product(req.body);
  await product.save();
  res.redirect('/');
});

router.get('/api/products/:id', async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  res.render('edit', { product });
});

router.post('/api/products/:id', async (req, res, next) => {
  const { id } = req.params;
  await product.update({ _id: id }, req.body);
  res.redirect('/');
});

router.get('/api/products/delete/:id', async (req, res, next) => {
  let { id } = req.params;
  await Product.remove({ _id: id });
  res.redirect('/');
});

//********************************** */





router.get('/', async (req, res) => {

  const lisProduct = await Product.find();
  const listCategory = await Category.find();
  res.render('index', {
    lisProduct, listCategory
  });
});

router.post('/api/categories/', async (req, res, next) => {
  const category = new Category(req.body);
  await category.save();
  res.redirect('/');
});



router.get('/api/categories/:id', async (req, res, next) => {
  const category = await category.findById(req.params.id);
  res.render('edit', { category });
});

router.post('/api/categories/:id', async (req, res, next) => {
  const { id } = req.params;
  await Category.update({ _id: id }, req.body);
  res.redirect('/');
});

router.get('/api/categories/:id', async (req, res, next) => {
  let { id } = req.params;
  await Category.remove({ _id: id });
  res.redirect('/');
});

  
  return app;
}

module.exports = createApp;

