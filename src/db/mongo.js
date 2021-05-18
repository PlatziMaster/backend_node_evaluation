//Declaration of db user settings
const { MongoClient, ObjectId } = require('mongodb')
const { config } = require('../config')

const USER = encodeURIComponent(config.dbUser)
const PASSWORD = encodeURIComponent(config.dbPassword)

//Declaration of db client settings
const MONGO_URI = `${config.dbConnection}://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}?retryWrites=true&w=majority`

const client = new MongoClient( MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
} )

module.exports = client