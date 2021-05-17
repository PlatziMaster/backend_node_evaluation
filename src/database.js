const MongoClient = require("mongodb");

const { config } = require("./config");

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const DB_NAME = config.dbName;

const MONGO_URI = `${config.dbConnection}://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}?retryWrites=true&w=majority`;

async function connect() {
  try {
    const client = await MongoClient.connect(MONGO_URI, {
      useUnifiedTopology: true,
    });
    const db = client.db(DB_NAME);
    console.log(`Database is connected in MongoAtlas!`);
    return db;
  } catch (e) {
    console.log(e);
  }
}
module.exports = connect;
