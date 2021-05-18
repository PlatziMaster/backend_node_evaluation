//Routes
const products_api_router = require('./routes/api/products')
const categories_api_router = require('./routes/api/categories')

//Variables
const express = require('express');
const cors = require('cors');

//App function
function createApp() { 
  const app = express();
  app.use(cors());
  app.use(express.json());

  //Products
  app.use("/api/products", products_api_router)
  //Categories
  app.use("/api/categories", categories_api_router)
  return app;
}

module.exports = createApp;
