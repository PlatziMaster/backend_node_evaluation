const express = require("express");
const cors = require("cors");

const { categoriesRouter, productsRouter } = require("./routers");

function createApp() {
  const app = express();
  app.use(cors());
  app.use(express.json());

  // ADD YOUR ROUTES
  app.use("/api/products", productsRouter);
  app.use("/api/categories", categoriesRouter);
  return app;
}

module.exports = createApp;
