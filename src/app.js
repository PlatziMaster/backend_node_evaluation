const express = require("express");
const cors = require("cors");

var indexRouter = require("./routes/index");
var productsRouter = require("./routes/products");
var categoriesRouter = require("./routes/categories");

function createApp() {
  var app = express();
  app.use(express.json());
  app.use(cors());

  app.use("/", indexRouter);
  app.use("/api/products", productsRouter);
  app.use("/api/categories", categoriesRouter);

  // ADD YOUR ROUTES
  return app;
}

module.exports = createApp;
