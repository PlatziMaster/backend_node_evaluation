const express = require('express');
const cors = require('cors');
const router = require('./network/routes');
const mongoDB = require('./lib/mongo');

function createApp() {
  const app = express();
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({extended: false}));
  app.use(express.static('public'));
  router(app);
  mongoDB();
  return app;
}

module.exports = createApp;
