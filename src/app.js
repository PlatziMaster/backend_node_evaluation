const express = require('express');
const cors = require('cors');
const api =  require('./routes/api')

function createApp() { 
  const app = express();
  app.use(cors());
  app.use(express.json());

  // ADD YOUR ROUTES
  app.use('/api', api)

  return app;
}

module.exports = createApp;
