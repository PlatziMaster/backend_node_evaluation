const express = require("express");
const cors = require("cors");
const { connect } = require("./lib/mongo");
const categoriesRouter = require("./routes/categories");
const productsRouter = require("./routes/products");
function createApp() {
  const app = express();
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  connect();
  // ADD YOUR ROUTES
  app.use("/api/categories", categoriesRouter);
  app.use("/api/products", productsRouter);
  return app;
}

module.exports = createApp;
