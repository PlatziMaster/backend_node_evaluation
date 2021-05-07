const express = require('express');
const cors = require('cors');
const routerProducts = require('./api/products/router.products');
const routerCategories = require('./api/categories/router.categories');

const {
  logErrors,
  wrapErrors,
  clientErrorHandler
} = require('./utils/middlewares/errors')

function createApp() { 
  const app = express();
  app.use(cors());
  app.use(express.json());

  app.get("/", function(req, res, next) {
    res.send("welcome to the api of platzi sports shop")
  })

  app.use("/api/products", routerProducts);
  app.use("/api/categories", routerCategories);

  app.use(logErrors);
  app.use(wrapErrors);
  app.use(clientErrorHandler);

  return app;
}

module.exports = createApp;
