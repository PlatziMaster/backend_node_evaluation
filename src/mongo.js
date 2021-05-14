const { config } = require("./config/index");
//const mgc = require("mongodb").MongoClient;
const db = require('mongoose');


db.Promise = global.Promise;
async function connect(){
  const dbUser = config.dbUser;
  const dbPassword = config.dbPassword;
  const dbHost = config.dbHost;
  const dbName = config.dbName;
  const dbConnection = config.dbConnection;

  const connString = `${dbConnection}://${dbUser}:${dbPassword}@${dbHost}/${dbName}?retryWrites=true&w=majority`;

  await db.connect(connString, {
      useNewUrlParser: true,
      useUnifiedTopology: true
  });
  console.log('[db] Conectada con éxito');
}

module.exports.connect = connect;