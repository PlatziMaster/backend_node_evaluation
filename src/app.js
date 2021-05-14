const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('../src/config').config;

function createApp() {
  const app = express();
  app.use(cors());
  app.use(express.json());
  mongoose.connect(
      `mongodb://${config.dbHost}:${config.dbPort}/${config.dbName}`,
    {useNewUrlParser: true, useUnifiedTopology: true}
  );

  // ADD YOUR ROUTES
  return app;
}

module.exports = createApp;
