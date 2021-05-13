const MongoClient = require('mongodb').MongoClient
const { config } = require('./config');

const MONGO_URI = `${config.dbConnection}://${config.dbUser}:${config.dbPassword}@${config.dbHost}/${config.dbName}?retryWrites=true&w=majority`;


async function Connect() {
    try {
        const client = await MongoClient.connect(MONGO_URI, {useNewUrlParser: true});
        const db = client.db(config.dbName);
        return db;
    } catch(e) {
        console.log(e);
    }
}

module.exports = Connect