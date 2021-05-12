const express = require('express');
const cors = require('cors');


const routes = require('./routes/index.js');

function createApp() { 
  const app = express();
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({extended: false}));
  

  // ADD YOUR ROUTES
  app.use('/',routes);

  return app;
}

module.exports = createApp;
