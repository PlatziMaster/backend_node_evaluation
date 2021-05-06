const mongoose = require('mongoose');
const {config} = require('../config/index');

const URI = "mongodb://"+config.dbHost+":"+config.dbPort+"/"+config.dbName;

const options = {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}

mongoose.connect(URI,options)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));


module.exports = mongoose;