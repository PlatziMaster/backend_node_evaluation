const express = require('express');
const cors = require('cors');

const productController = require('./productController');
const response = require('./response');

function createApp() { 
  const app = express();
  app.use(cors());
  app.use(express.json());

  // PRODUCT ROUTES
  app.post('/api/products/', function (req, res) {
    productController.addProduct(req.body.product)
      .then((product) => {
        response.success(req, res, product, 201);
      })
      .catch(e => {
        response.error(req, res, 'La solicitud no es válida', 400, e);
      })
  });

  app.put('/api/products/:id', function (req, res) {
    res.send('PUT request to the homepage');
  });

  app.delete('/api/products/:id', function (req, res) {
    res.send('DELETE request to the homepage');
  });

  app.get('/api/products', function (req, res) {
    productController.listProducts()
      .then((productList) => {
        response.success(req, res, productList, 200);
      })
      .catch(e => {
        response.error(req, res, 'Ha ocurrido un error', 500, e);
      })
  });

  app.get('/api/products/:id', function (req, res) {
    res.send('GET request to the homepage');
  });

  // CATEGORY ROUTES
  app.get('/api/categories', function (req, res) {
    res.send('GET request to the homepage');
  });

  app.get('/api/categories/:id', function (req, res) {
    res.send('GET request to the homepage');
  });

  app.post('/api/categories/', function (req, res) {
    res.send('POST request to the homepage');
  });

  app.put('/api/categories/:id', function (req, res) {
    res.send('PUT request to the homepage');
  });

  app.delete('/api/categories/:id', function (req, res) {
    res.send('DELETE request to the homepage');
  });

  app.get('/api/categories/:id/products', function (req, res) {
    res.send('GET request to the homepage');
  });

  return app;
}

module.exports = createApp;
