const mongoose = require('mongoose');
const { config } = require('.');

const MONGO_URI = (config.dev === true) ?
                  "mongodb://root:root@127.0.0.1:27017" : 
                  `${config.dbConnection}://${config.dbUser}:${config.dbPassword}@${config.dbHost}/${config.dbName}?retryWrites=true&w=majority`;


mongoose.connect(MONGO_URI, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
});

mongoose.Promise = global.Promise
const db_conn = mongoose.connection;

db_conn.on('error', () => {
  console.error("OCURRIO UN ERROR!!!!!!!!!!!!!!!!")
  console.error.bind(console, 'Can\'t connect to MongoDB')
});

db_conn.once('open', () => {
  console.log('Connection successfully');
});

// module.exports = db_conn;