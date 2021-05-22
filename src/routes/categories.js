const express = require('express');
const response = require('../utils/network/response');
const Controller = require('../controllers/categories/index');

const app = express();

app.get('/categories', getCategories);
app.get('/categories/:id', getCategoriesId);
app.post('/categories', postCategories);
app.put('/categories/:id', putCategories);
app.delete('/categories/:id', deleteCategories);
app.get('/categories/:id/products', getCategoriesIdProducts);

function getCategories(req, res) {
  Controller.getCategories()
    .then((user) => {
      response.success(req, res, user, 200);
    })
    .catch((err) => {
      response.error(req, res, err.message, 400);
    });
}
function getCategoriesId(req, res) {
  Controller.getCategoriesId(req.params)
    .then((user) => {
      response.success(req, res, user, 200);
    })
    .catch((err) => {
      response.error(req, res, err.message, 400);
    });
}
function postCategories(req, res) {
  Controller.postCategories(req.body)
    .then((user) => {
      response.success(req, res, user, 200);
    })
    .catch((err) => {
      response.error(req, res, err.message, 400);
    });
}
function putCategories(req, res) {
  console.log('entro');
  Controller.putCategories(req.body, req.params)
    .then((user) => {
      response.success(req, res, user, 200);
    })
    .catch((err) => {
      response.error(req, res, err.message, 400);
    });
}
function deleteCategories(req, res) {
  Controller.deleteCategories(req.params)
    .then((user) => {
      response.success(req, res, user, 200);
    })
    .catch((err) => {
      response.error(req, res, err.message, 400);
    });
}
function getCategoriesIdProducts(req, res) {
  Controller.getCategoriesIdProducts(req.params)
    .then((user) => {
      response.success(req, res, user, 200);
    })
    .catch((err) => {
      response.error(req, res, err.message, 400);
    });
}

module.exports = app;
