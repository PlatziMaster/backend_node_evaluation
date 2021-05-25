const express = require('express');
const cors = require('cors');
const categoriesRouter = require('./api/categories/categoriesRouter');
const productsRouter = require('./api/products/productsRouter');

function createApp() { 
  const app = express();
  app.use(cors());
  app.use(express.json());

  // ADD YOUR ROUTES
  app.use("/api/categories", categoriesRouter);
  app.use("/api/products", productsRouter);
  return app;
}

module.exports = createApp;
