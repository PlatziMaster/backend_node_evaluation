const express = require('express');
const cors = require('cors');
const { config } = require('./config');


const productsApi = require('./routes/products.js');
const categoriesApi = require('./routes/categories.js');
const { logErrors, errorHandler, wrapErrors} = require('./middleware/error-handlers.js')
const notFoundHandler = require('./middleware/not-found-handler.js');

function createApp() { 
  const app = express();

  const corsOptions = { origin: config.cors };
  
  app.use(cors(corsOptions));
  app.use(express.json());

  productsApi(app)
  categoriesApi(app)


  app.use(notFoundHandler);

  app.use(logErrors)
  app.use(wrapErrors)
  app.use(errorHandler)



  app.get('/', function(req, res) {
    res.send('Back-End Challenge for Platzi Master 😃 by Ricardo Ruíz Velazco ');
  });

  // ADD YOUR ROUTES
  return app;
}

module.exports = createApp;
