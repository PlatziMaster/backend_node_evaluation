const express = require('express');
const cors = require('cors');

function createApp() {
  const app = express();
  app.use(cors());
  app.use(express.json());

  // ADD YOUR ROUTES

  app.use(require('./routes/productRoutes'))
  app.use(require('./routes/categoryRoutes'))

  return app;
}


module.exports = createApp;
