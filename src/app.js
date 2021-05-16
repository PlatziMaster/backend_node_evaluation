const express = require('express');
const cors = require('cors');
const indexRoutes = require('./routers/index')
const mongoose = require('mongoose');

const dbmongo = mongoose.connect('mongodb://localhost/mongo-crud')
  .then(db => console.log('Db connected'))
  .catch(err => console.log(err));

function createApp() { 
  const app = express();
  app.use(cors());
  app.use(express.json());
  app.use('/', indexRoutes);
  app.use('database', dbmongo);

  // ADD YOUR ROUTES
  return app;
}

module.exports = createApp;
