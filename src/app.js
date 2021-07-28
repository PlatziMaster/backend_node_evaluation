const express = require("express");
const cors = require("cors");

const categoriesRoutes = require("./categories/routes");
const productsRoutes = require("./products/routes");

const {
  wrapErrors,
  logErrors,
  errorHandler,
} = require("./utils/middleware/errorHandler");

function createApp() {
  const app = express();
  app.use(cors());
  app.use(express.json());

  // ADD YOUR ROUTES
  categoriesRoutes(app);
  productsRoutes(app);

  // errors handler
  app.use(logErrors);
  app.use(wrapErrors);
  app.use(errorHandler);

  return app;
}

module.exports = createApp;
