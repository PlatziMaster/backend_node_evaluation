import express, { Express } from 'express'
import cors from 'cors'
import categoriesApiRouter from './routes/api/categories'
import productsApiRouter from './routes/api/products'

/**
 * Generates a pre configured express application
 *
 * @returns An express application
 */
const createApp = (): Express => {
  const app = express()
  app.use(cors())
  app.use(express.json())

  // ADD YOUR ROUTES
  categoriesApiRouter(app)
  productsApiRouter(app)

  return app
}

export default createApp
