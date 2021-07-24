import express from 'express'
import cors from 'cors'

const createApp = () => {
  const app = express()
  app.use(cors())
  app.use(express.json())

  // ADD YOUR ROUTES
  return app
}

export default createApp
