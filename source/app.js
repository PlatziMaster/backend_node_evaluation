const path = require("path");
const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");


//Connecting to db
mongoose.connect("mongodb+srv://hacg18:harold18@crudnodemongo.ruwy5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
    .then(db => console.log("DB connected"))
    .catch(err => console.log("Error"));


//Settings
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//Imports routes
const indexRoutes = require("./routes/index");

//middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({extended: false}));

//routes
app.use("/", indexRoutes);

//Starts the server
app.listen(app.get("port"), ()=>{
    console.log(`Server on port ${app.get("port")}`);
})