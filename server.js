const express = require("express");
const bodyParser = require("body-parser");

//const MongoClient = require("mongodb").MongoClient;

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
require("./app/routes/note.routes.js")(app);

// listen for requests
app.listen(3000, () => {
  console.log("Server is listening on http://localhost:3000");
});
