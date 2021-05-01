// Importing DB configuration from the config file
const { config } = require('../config/index');
const {dbHost, dbName, dbPassword, dbUser} = config;

// Mongo
const MongoClient = require('mongodb').MongoClient;
const uri = `mongodb+srv://${dbUser}:${dbPassword}@${dbHost}/${dbName}?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function checkClientConnection() {
   if (!client.isConnected()) {
      return client.connect();
   }
}

let mongoLib = {
   getAll: async(collection) => {
      await checkClientConnection();

      let db = await client.db(dbName);
      let allElementsList =  await db.collection(collection).find().toArray();

      return allElementsList;
   },
   getOne: async(collection, query) => {
      await checkClientConnection();

      let db = await client.db(dbName);
      let gatheredElement =  await db.collection(collection).findOne(query).toArray();

      return gatheredElement;
   },
   saveOne: async(collection, contentData) => {
      await checkClientConnection();

      console.log(contentData);

      let db = await client.db(dbName);
      let savedElement = await db.collection(collection).insertOne(contentData);

      return savedElement;
   }
}

module.exports = mongoLib;