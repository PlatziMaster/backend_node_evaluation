const mongoose = require('mongoose');
const config = require('../src/config').config
const USER = encodeURIComponent(config.dbUser)
const PASSWORD = encodeURIComponent(config.dbPassword)
const CONNECTION_URL = `${config.dbConnection}://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`

const connect = () => {
    return mongoose.connect(
        CONNECTION_URL,
        {useNewUrlParser: true, useUnifiedTopology: true}
    )
}

module.exports = connect