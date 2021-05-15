const MongoClient = require('mongodb').MongoClient
const { config } = require('./config');

async function connect(){
    try {
        const client = await MongoClient.connect(config.dbHost, { useUnifiedTopology: true } )
        console.log(`Database is connected in MongoAtlas!`)
        return client;
        
    } catch(e) {
        console.log(e)
    }
    
}

module.exports = {connect};