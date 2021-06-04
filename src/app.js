const express = require("express");
const cors = require("cors");
const { config } = require("./config");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

function createApp() {
  const app = express();
  app.use(cors());
  app.use(express.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  mongoose.Promise = global.Promise;
  const USER = encodeURIComponent(config.dbUser);
  const PASSWORD = encodeURIComponent(config.dbPassword);
  const DB_NAME = config.dbName;

  const MONGO_URI = `${config.dbConnection}://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${DB_NAME}?retryWrites=true&w=majority&authSource=admin`;

  // ========================
  // Link to Database
  // ========================
  mongoose
    .connect(MONGO_URI, {
      useNewUrlParser: true,
    })
    .then(() => {
      console.log("Successfully connected to the database");
    })
    .catch((err) => {
      console.log("Could not connect to the database. Exiting now...", err);
      process.exit();
    });

  // ========================
  // App Routes
  // ========================
  require("./routes/product.routes.js")(app);
  require("./routes/category.routes.js")(app);

  console.log("All Good");
  return app;
}

module.exports = createApp;
