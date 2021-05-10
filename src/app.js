const express = require('express');
const cors = require('cors');

function createApp() {
  const app = express();
  const productsApi = require('./routes/products.js');
  const categoriesApi = require('./routes/categories.js');
  app.use(cors());
  app.use(express.json());

  // ADD YOUR ROUTES
  productsApi(app);
  categoriesApi(app);
  return app;
}

module.exports = createApp;
