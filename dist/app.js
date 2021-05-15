"use strict";

var express = require('express');

var cors = require('cors');

function createApp() {
  var app = express();
  app.use(cors());
  app.use(express.json()); // ADD YOUR ROUTES

  return app;
}

module.exports = createApp;