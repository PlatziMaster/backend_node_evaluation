const express = require('express');
const cors = require('cors');
const categoriesRouter = require('./api/categories/categoriesRouter');

function createApp() { 
  const app = express();
  app.use(cors());
  app.use(express.json());

  // ADD YOUR ROUTES
  app.use("/api/categories", categoriesRouter);
  return app;
}

module.exports = createApp;
