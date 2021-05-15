const { MongoClient, ObjectId } = require("mongodb");
const { config } = require("./config/index");

//------------------------------------------------------------------------------------
const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const DB_NAME = config.dbName;
const MONGO_URI = `${config.dbConnection}://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}?retryWrites=true&w=majority`;

const client = new MongoClient(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connect = async () => {
  const isConnected = !!client && !!client.topology && client.topology.isConnected()
  isConnected ? ' ' : await client.connect() 
  return client.db(DB_NAME);
}

const insertOne = async (collection, data) => {
  const database = await connect()
  return await database.collection(collection).insertOne(data);
}

const find = async (collection, filter = {}) => {
  const database = await connect()
  return await database.collection(collection).find(filter).toArray();
}

const findOne = async (collection, id) => {
  const database = await connect()
  return await database.collection(collection).findOne({ _id: new ObjectId(id) });
}

const updateOne = async (collection, id, data) => {
  const database = await connect()
  return await database.collection(collection).updateOne(
    { _id: new ObjectId(id) }, { $set: data });
}

const deleteOne= async (collection, id)=> {
  const database = await connect()
  return await database.collection(collection).deleteOne({ _id: new ObjectId(id) });
}

//------------------------------------------------------------------------------------

module.exports = { findOne, find, insertOne, updateOne, deleteOne }
