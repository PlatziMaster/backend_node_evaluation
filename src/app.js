const express = require('express');
const cors = require('cors');
const IndexRoutes = require('./routes/index.routes')
const CategoriesRoutes = require('./routes/categories.routes')
const ProductsRoutes = require('./routes/products.routes')

async function createApp() { 
  // SETTINGS
  const app = express();
  app.use(cors());
  app.use(express.json());
  // ROUTES
  app.use(IndexRoutes)
  app.use('/api/categories',CategoriesRoutes)
  app.use('/api/products', ProductsRoutes)

  return app;
}

module.exports = createApp;
