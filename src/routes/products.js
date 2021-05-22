const express = require('express');
const response = require('../utils/network/response');
const Controller = require('../controllers/products/index');

const app = express();

app.get('/products', getProducts);
app.get('/products/:id', getProductsId);
app.post('/products', postProducts);
app.put('/products/:id', putProducts);
app.delete('/products/:id', deleteProducts);

function getProducts(req, res) {
  Controller.getProducts()
    .then((user) => {
      response.success(req, res, user, 200);
    })
    .catch((err) => {
      response.error(req, res, err.message, 500);
    });
}
function getProductsId(req, res) {
  Controller.getProductsId(req.params)
    .then((user) => {
      response.success(req, res, user, 200);
    })
    .catch((err) => {
      response.error(req, res, err.message, 500);
    });
}
function postProducts(req, res) {
  Controller.postProducts(req.body)
    .then((user) => {
      response.success(req, res, user, 200);
    })
    .catch((err) => {
      response.error(req, res, err.message, 500);
    });
}
function putProducts(req, res) {
  Controller.putProducts(req.body, req.params)
    .then((user) => {
      response.success(req, res, user, 200);
    })
    .catch((err) => {
      response.error(req, res, err.message, 500);
    });
}
function deleteProducts(req, res) {
  Controller.deleteProducts(req.params)
    .then((user) => {
      response.success(req, res, user, 200);
    })
    .catch((err) => {
      response.error(req, res, err.message, 500);
    });
}

module.exports = app;
