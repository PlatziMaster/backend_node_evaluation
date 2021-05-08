const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
require('dotenv').config({ path: 'variables.env' });

const config = {
    dev: process.env.NODE_ENV !== 'production',
    port: process.env.PORT || 3000,
    dbUser: process.env.DB_USER,
    dbPassword: process.env.DB_PASSWORD,
    dbHost: process.env.DB_HOST,
    dbName: process.env.DB_NAME,
    dbPort: process.env.DB_PORT,
    dbConnection: process.env.DB_CONNECTION,
};

// const url = `${config.dbConnection}://${config.dbUser}:${config.dbPassword}@${config.dbHost}:${config.dbPort}`;
const url = `${config.dbConnection}://${config.dbHost}:${config.dbPort}`;
console.log(url)
const db_n = "platzi_test";
const client = new MongoClient(url, { useUnifiedTopology: true });

const mongoConnection = async (db_n) => {
    const connecton = await client.connect();
    db = connecton.db(db_n);
    collection = db.collection("categories");
    
    return db;
}
// module.exports = client;
module.exports =  mongoConnection;