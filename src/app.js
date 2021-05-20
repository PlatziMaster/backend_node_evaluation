const express = require('express');
const cors = require('cors');

const { config } = require('./config');
const connectDB = require('./network/db');
const setRoutes = require('./network/routes');

function createApp() { 
  const app = express();
  app.use(cors());
  app.use(express.json());
  
  app.use(express.static(__dirname + '/public'))

  connectDB(config.dbURL);
  setRoutes(app);

  // app.set("views", path.join(__dirname, "views"));
  // app.set("view engine", "ejs");

  return app;
}

module.exports = createApp;
