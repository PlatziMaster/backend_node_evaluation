const express = require("express");
const cors = require("cors");

const categoriesRoutes = require("./categories/routes");

function createApp() {
  const app = express();
  app.use(cors());
  app.use(express.json());

  // ADD YOUR ROUTES
  categoriesRoutes(app);
  return app;
}

module.exports = createApp;
