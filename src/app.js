const express = require('express');
const cors = require('cors');
const router = require('./network/routes');
const db = require('./db');
const { config } = require('./config');
const MONGO_URI =  `${config.dbConnection}://${config.dbUser}:${config.dbPassword}@${config.dbHost}/${config.dbName}?retryWrites=true&w=majority`;



function createApp() { 
  db(MONGO_URI);
  const app = express();
  app.use(cors());
  app.use(express.json());

  // ADD YOUR ROUTES
  router(app);
  return app;
}

module.exports = createApp;


//mongodb+srv://DonDataManager:<password>@cluster0.chnwr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

//MongoCompas
//mongodb+srv://DonDataManager:<password>@cluster0.chnwr.mongodb.net/test