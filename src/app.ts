import express, { Express } from 'express'
import cors from 'cors'

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
  return app
}

export default createApp
