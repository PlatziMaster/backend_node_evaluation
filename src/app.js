const express = require('express');
const cors = require('cors');
const productsApi = require('./routes/products.js')
const categoriesApi = require('./routes/categories.js')

function createApp() { 
  const app = express();
  app.use(cors());
  app.use(express.json());

  // ADD YOUR ROUTES
  productsApi(app)
  categoriesApi(app)
  return app;
}

module.exports = createApp;
