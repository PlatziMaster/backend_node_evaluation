const express = require('express');
const cors = require('cors');

function createApp() { 
  const app = express();
  app.use(cors());
  app.use(express.json());

  // ADD YOUR ROUTES

  const { config } = require('../src/config/index');
  const productsApi = require('../routes/productos.js');

  productsApi(app);

  return app;
}

module.exports = createApp;
