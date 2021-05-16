const express = require('express');
const cors = require('cors');
const productsApi = require('./routes/products.js')

function createApp() { 
  const app = express();
  app.use(cors());
  app.use(express.json());

  // ADD YOUR ROUTES
  productsApi(app)
  return app;
}

module.exports = createApp;
