const express = require("express");
const cors = require("cors");
const apiRouter = require("./routes");
const notFoundHandler = require("./middlewares/notFoundHandler");
function createApp() {
  const app = express();
  app.use(cors());
  app.use(express.json());

  app.use("/api", apiRouter);
  //catch 404
  app.use(notFoundHandler);
  return app;
}

module.exports = createApp;
