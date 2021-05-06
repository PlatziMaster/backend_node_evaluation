const express = require('express');
const cors = require('cors');

//import routes
const productsApiRouter = require('./routes/api/products')
const categoriesApiRouter = require('./routes/api/categories')

function createApp() { 
  const app = express();
  app.use(cors());
  app.use(express.json());

  // ADD YOUR ROUTES
  app.use("/api/products", productsApiRouter)
  app.use("/api/categories", categoriesApiRouter)
  return app;
}

module.exports = createApp;
