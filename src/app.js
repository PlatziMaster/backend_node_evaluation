const express = require('express');
const cors = require('cors');
const { connect } = require("./mongo");

function createApp() { 
  const app = express();
  app.use(cors());
  app.use(express.json());
  connect()
  // ADD YOUR ROUTES
  return app;
}

module.exports = createApp;
