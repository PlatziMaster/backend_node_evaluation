const { config } = require("./config/index");
const mgc = require("mongodb").MongoClient;

const dbUser = config.dbUser;
const dbPassword = config.dbPassword;
const dbHost = config.dbHost;
const dbName = config.dbName;
const dbConnection = config.dbConnection;

const connString = `${dbConnection}://${dbUser}:${dbPassword}@${dbHost}/${dbName}?retryWrites=true&w=majority`;
const client = mgc(connString, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const connect = async () => {
  const conn = await client.connect();
  db = conn.db(dbName);
  console.log("Connected to database");
};

module.exports.connect = connect;