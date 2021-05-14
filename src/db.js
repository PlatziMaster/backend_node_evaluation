require('dotenv').config();
const mongoose = require('mongoose');

const { config } = require("../src/config");
const { dbConnection, dbHost, dbName, dbPassword, dbPort, dbUser } = config

const MONGO_URI = `${dbConnection}://${dbHost}:${dbPort}/${dbName}`;

mongoose.connect(MONGO_URI, {
  auth: {
    user: dbUser,
    password: dbPassword
  },
  authSource: "admin",
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}).then(db => console.log('Database is connected'))
  .catch(err => console.log(err));

module.exports = {
  Product: require('./product/model'),
  Category: require('./category/model')
}
