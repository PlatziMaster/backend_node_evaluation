const express = require("express");
const bodyParser = require("body-parser");

// Loading Environment variables
require("dotenv").config();

// create express app
const app = express();

// parse requestes for content-type urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse requestes of content-type: application/json
app.use(bodyParser.json());

// Configuring database
const dbConfig = require("./config/database.config.js");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// To handle deprecation warning from findAndUpdate()
mongoose.set("useFindAndModify", false);

mongoose.Promise = global.Promise;

// Connecting to the database

mongoose
  .connect(dbConfig.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Successfully connected to the database");
  })
  .catch(err => {
    console.log("Could not connect to the database. Exiting..", err);
    process.exit();
  });

// define a route

app.get("/", (req, res) => {
  res.json({ message: "Welcome to Platzi Master... I will be your guide" });
});

// Require routes
require("./app/routes/api.routes.js")(app);

// Leer localhost de variables y puerto
const host = process.env.HOST || "0.0.0.0";
const port = process.env.PORT || 3000;

// listen for requests
app.listen(port, host, () => {
  console.log("Server is listening on http://localhost:3000");
});
