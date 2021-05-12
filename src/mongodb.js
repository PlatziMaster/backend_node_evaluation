const { config } = require('./config');
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

MongoClient.connect(config.dbHost, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) =>{
    if (error) {
        return console.log('Unable to connect to database');
    }
    // const db = client.db(config.dbName);

    // db.collection('users').insertOne({
    //     name: 'Daniel',
    //     age: 38
    // });
});

module.exports = {MongoClient};
