const mongoose  = require("mongoose");

const { config } = require('./config');

module.exports = () => {
  mongoose.
  connect(config.dbConnection + "://" + config.dbHost,{
  dbName: config.dbName,
  user: config.dbUser,
  pass: config.dbPassword,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
})
.then(()=>{
    console.log('mongodb is connected')
})
.catch((err)=>console.log(err.message));
}