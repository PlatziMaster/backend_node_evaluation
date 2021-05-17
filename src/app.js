import express from'express'
import { json } from 'express'
import cors from 'cors'
import IndexRoutes from './routes/index.routes'
import CategoriesRoutes from './routes/categories.routes'
import ProductsRoutes from './routes/products.routes'

async function createApp() { 
  // SETTINGS
  const app = express();
  app.use(cors());
  app.use(express.json());
  //MIDDLEWARES
  app.use(json())
  // ROUTES
  app.use(IndexRoutes)
  app.use('/api/categories',CategoriesRoutes)
  app.use('/api/products', ProductsRoutes)

  return app;
}

module.exports = createApp;
