const express = require('express');
const cors = require('cors');
const productRoutes = require('./Routes/ProductRoutes.js')

function createApp() { 
  const app = express();
  app.use(cors());
  app.use(express.json());

  productRoutes(app);

  return app;
}

module.exports = createApp;
