const express = require('express');
const cors = require('cors');

function createApp() { 
  const app = express();
  app.use(cors());
  app.use(express.json());

  // ADD YOUR ROUTES
  const routes = require('./router')
  app.use(routes)
  return app;
}

module.exports = createApp;
