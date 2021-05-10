const mongoClient = require("mongodb").MongoClient;
const { config } = require("../config/index");
let { dbUser, dbPassword, dbHost, dbName, dbPort, dbConnection } = config;
const uri = dbPort
  ? `${dbConnection}://${dbUser}:${dbPassword}@${dbHost}:${dbPort}/${dbName}`
  : `${dbConnection}://${dbUser}:${dbPassword}@${dbHost}/${dbName}?retryWrites=true`;

console.log(uri);
let db;

const client = mongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connect = async () => {
  const conn = await client.connect();
  db = conn.db(dbName);
  console.log("Connected to database");
};

const getDbRef = () => {
  return db ? db : new Error("Error de conexion");
};
module.exports.connect = connect;
module.exports.db = getDbRef;
