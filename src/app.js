const express = require("express");
const cors = require("cors");
const apiRouter = require("./routes");

function createApp() {
  const app = express();
  app.use(cors());
  app.use(express.json());

  app.use("/api", apiRouter);
  return app;
}

module.exports = createApp;
