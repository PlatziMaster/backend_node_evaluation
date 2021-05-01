// Importing DB configuration from the config file
const { config } = require('../config/index');
const {dbHost, dbName, dbPassword, dbUser} = config;

// Mongo
const MongoClient = require('mongodb').MongoClient;
const uri = `mongodb+srv://${dbUser}:${dbPassword}@${dbHost}/${dbName}?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });


client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  console.log("successfully connected to DB");
  client.close();
});