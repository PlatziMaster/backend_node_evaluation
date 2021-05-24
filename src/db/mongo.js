const { config } = require("../config");
const { MongoClient } = require('mongodb');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const DB_NAME = config.dbName;

const MONGO_URI = `${config.dbConnection}://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}?retryWrites=true&w=majority`;

class MongoMain{
    constructor() {
        this.client = new MongoClient(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
    };

    async connect() {
        try {
            const connection = await this.client.connect();
            return connection.db(DB_NAME);
        } catch(e) {
            console.error(e);
        }
    };

    async close() {
        try {
            this.client.close();
        } catch(e) {
            console.error(e);
        }
    };
};

module.exports = MongoMain;