const express = require('express');
const cors = require('cors');

function createApp() { 
  const app = express();
  app.use(cors());
  app.use(express.json());

  // ADD YOUR ROUTES
  const category = require('./routes/category');
  app.use(category);

  const product = require('./routes/product');
  app.use(product);

  return app;
}

module.exports = createApp;
