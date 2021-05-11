const MongoClient = require("mongodb").MongoClient;
const uri =
  "mongodb://localhost:27017/?readPreference=primary&appname=platzi&ssl=false";

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = client;
/*
client.connect((err) => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});*/
