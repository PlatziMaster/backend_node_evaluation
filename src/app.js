const express = require('express');
const cors = require('cors');
const routes = require('./api/index')

function createApp() {
  const app = express();
  app.use(cors());
  app.use(express.json());

  // ADD YOUR ROUTES
  app.use('/api', routes);
  return app;
}

module.exports = createApp;
