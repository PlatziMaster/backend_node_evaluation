const express = require('express');
const cors = require('cors');
const router = require("./network/routes");

function createApp() { 
  const app = express();
  app.use(cors());
  app.use(express.json());

  // ADD YOUR ROUTES
  //yo elegí crear un archivo separado para manejar las rutas este se encuentra en ./network/routes.js
  router(app);
  return app;
}

module.exports = createApp;
