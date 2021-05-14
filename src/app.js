const express = require('express');
const cors = require('cors');
const { config } = require('./config');

function createApp() { 
  const app = express();

  const corsOptions = { origin: config.cors };
  
  app.use(cors(corsOptions));
  
  app.use(express.json());

  // ADD YOUR ROUTES
  return app;
}

module.exports = createApp;
