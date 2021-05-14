const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('../src/config').config;
const CategoriesController = require('./controllers/categories-controller');
const ProductsController = require('./controllers/products-controller');
const CategoriesProductsController = require('./controllers/categories-products-controller');

function createApp() {
  const app = express();
  app.use(cors());
  app.use(express.json());
  mongoose.connect(
      `mongodb://${config.dbHost}:${config.dbPort}/${config.dbName}`,
    {useNewUrlParser: true, useUnifiedTopology: true}
  );

  app.get('/api/categories', CategoriesController.index);
  app.post('/api/categories', CategoriesController.store);
  app.get('/api/categories/:id', CategoriesController.show);
  app.put('/api/categories/:id', CategoriesController.update);
  app.delete('/api/categories/:id', CategoriesController.delete);

  app.get('/api/categories/:categoryId/products', CategoriesProductsController.index);

  app.get('/api/products', ProductsController.index);
  app.post('/api/products', ProductsController.store);
  app.get('/api/products/:id', ProductsController.show);
  app.put('/api/products/:id', ProductsController.update);
  app.delete('/api/products/:id', ProductsController.delete);

  return app;
}

module.exports = createApp;
