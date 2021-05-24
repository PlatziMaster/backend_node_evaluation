const { config } = require('../config');
const MongoClient = require('mongodb').MongoClient;
const uri = `${config.dbConnection}://${config.dbUser}:${config.dbPassword}@${config.dbHost}/${config.dbName}?retryWrites=true&w=majority`;
const mongo_client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const client = {
    connect(){
        return mongo_client.connect()
    },

    db(nameDB){
        return mongo_client.db(nameDB)
    },

    close(){
        return mongo_client.close()
    }
}
client.connect()

process.on('SIGINT', () => {
    client.close().then(() => {
        process.exit(0)
    })
})

module.exports = client
