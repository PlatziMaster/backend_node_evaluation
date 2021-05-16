const express = require('express');
const cors = require('cors');
const routes = require('./http/routes/api')
// DB
const mongoose = require('./config/mongoose')
// MIDDLEWARE
const errorsMiddleware = require('./http/middlewares/errors.middlewares')

function createApp() { 
  // open mongoose connection
mongoose.connect();

  const app = express();
  app.use(cors());
  app.use(express.json());

  // ADD YOUR ROUTES
  app.use(routes)

  // HANDLER ERROR
  app.use(errorsMiddleware.wrapErrors)
  app.use(errorsMiddleware.errorHandler)
  app.use(errorsMiddleware.notFoundHandler)

  return app;
}

module.exports = createApp;
