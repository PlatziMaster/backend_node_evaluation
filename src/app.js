const express = require("express");
const cors = require("cors");
const { connect } = require("./lib/mongo");
function createApp() {
  const app = express();
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  connect();
  // ADD YOUR ROUTES
  return app;
}

module.exports = createApp;
