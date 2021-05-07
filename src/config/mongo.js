const { config } = require('../config')
const { MongoClient } = require('mongodb');

const uri = `mongodb+srv://${config.dbUser}:${config.dbPassword}@${config.dbHost}`
const dbName = config.dbName

class MongoMain{
    constructor() {
        this.client = new MongoClient(uri, {useUnifiedTopology: true})
    }

    async connect() {
        try {
            const connection = await this.client.connect();
            return connection.db(dbName);

        } catch(e) {
            console.error(e)
        }
    }

    async close() {
        try {
            this.client.close()
        } catch(e) {
            console.error(e)
        }
    }
}

module.exports = MongoMain;