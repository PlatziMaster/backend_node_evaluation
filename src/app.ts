import express, { Express } from 'express'
import cors from 'cors'
import categoriesApiRouter from './routes/api/categories'
import productsApiRouter from './routes/api/products'
import { errorsHandler, logErrors } from './network/middlewares'

/**
 * Generates a pre configured express application
 *
 * @returns - An express application
 */
const createApp = (): Express => {
  const app = express()
  app.use(cors())
  app.use(express.json())

  // Routes
  categoriesApiRouter(app)
  productsApiRouter(app)

  // Middlewares
  app.use(logErrors)
  app.use(errorsHandler)

  return app
}

export default createApp
