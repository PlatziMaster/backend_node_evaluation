const express = require('express');
const cors = require('cors');

const productRoutes = require('./Routes/ProductRoutes.js')
const categoryRoutes = require('./Routes/CategoryRoutes')

function createApp() { 
  const app = express();
  app.use(cors());
  app.use(express.json());

  productRoutes(app);
  categoryRoutes(app);

  return app;
}

module.exports = createApp;
