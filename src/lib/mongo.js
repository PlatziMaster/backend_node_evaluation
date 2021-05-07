const mongoose = require('mongoose');
const {config} = require('../config');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const DB_NAME = encodeURIComponent(config.dbName);
const MONGO_URl = `mongodb://${USER}:${PASSWORD}@cluster0-shard-00-00.1nfx4.mongodb.net:27017,cluster0-shard-00-01.1nfx4.mongodb.net:27017,cluster0-shard-00-02.1nfx4.mongodb.net:27017/${DB_NAME}?ssl=true&replicaSet=atlas-nunmw0-shard-0&authSource=admin&retryWrites=true&w=majority`;

mongoose.Promise = global.Promise;
const connect = async () => {
    await mongoose.connect(MONGO_URl, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useFindAndModify: false
    })
        .then(() => console.log('[Date Base Connect] DB conectada con éxito'))
        .catch(err => console.error('[db]', err));
};

module.exports = connect
