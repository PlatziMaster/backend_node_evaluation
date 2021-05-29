const express = require('express');
const cors = require('cors');

const products = require('./api/components/products');

function createApp() { 
  const app = express();
  app.use(cors());
  app.use(express.json());

  // ADD YOUR ROUTES
  app.use('/api/products', products);
}

module.exports = createApp;
