const MongoClient = require("mongodb").MongoClient;
const { config } = require("./config");

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);

const DB_NAME = config.dbName;
const MONGO_PORT = !config.dbConnectionIsSrv ? `:${config.dbPort}` : "";
const MONGO_URI = `${config.dbConnection}://${USER}:${PASSWORD}@${config.dbHost}${MONGO_PORT}?retryWrites=true&w=majority`;

module.exports = (function () {
  let db = null;

  async function DbConnect() {
    const client = new MongoClient(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    await client.connect();
    return client.db(DB_NAME);
  }

  async function GetDb() {
    if (db == null) {
      db = await DbConnect();
    }
    return db;
  }

  return GetDb;
})();
