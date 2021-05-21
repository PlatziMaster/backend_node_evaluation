const express = require('express');
const cors = require('cors');

const { config } = require('./api/config');
const connectDB = require('./api/network/db');
const setRoutes = require('./api/network/routes');

function createApp() { 
  const app = express();
  app.use(cors());
  app.use(express.json());
  
  app.use(express.static(__dirname + '/public'))

  connectDB(config.dbURL);
  setRoutes(app);

  return app;
}

module.exports = createApp;
