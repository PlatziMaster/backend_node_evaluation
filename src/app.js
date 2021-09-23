const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");

function createApp() {
  const app = express();
  app.use(cors());
  app.use(express.json());

  //Log de solicitudes
  app.use(morgan("tiny"));
  app.set("view engine", "ejs");
  //app.set("views", path.resolve(__dirname, "/view/ejs"));
  //indicamos ruta de carga css js

  app.use("css", express.static(path.resolve(__dirname, "assets/css")));
  app.use("img", express.static(path.resolve(__dirname, "assets/img")));
  app.use("js", express.static(path.resolve(__dirname, "assets/js")));
  // ADD YOUR ROUTES
  app.use("/", require("../server/routes/router"));

  return app;
}

module.exports = createApp;
