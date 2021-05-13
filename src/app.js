const express = require('express');
const cors = require('cors');
const path = require('path');


const routes = require('./routes/index.js');

function createApp() { 
  const app = express();
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({extended: false}));
  
  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'ejs');

  // ADD YOUR ROUTES
  app.use('/',routes);

  return app;
}

module.exports = createApp;
