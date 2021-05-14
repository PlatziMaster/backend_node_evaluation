const express = require('express');
const cors = require('cors');
const { connect } = require("./mongo");

const router = require("./network/routes");

function createApp() { 
  const app = express();
  app.use(cors());
  app.use(express.json());
  connect()
  // ADD YOUR ROUTES
  router(app)
  return app;
}

module.exports = createApp;
