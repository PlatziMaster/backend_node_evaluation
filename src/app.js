const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('../src/config').config;
const CategoriesController = require('./controllers/categories-controller');

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

  return app;
}

module.exports = createApp;
