const mongoose = require('mongoose');
const {config} = require('../config/index');

const URI = "mongodb+srv://"+config.dbUser+":"+config.dbPassword+"@"+config.dbHost+"/"+config.dbName+"?retryWrites=true&w=majority";

const options = {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}

mongoose.connect(URI,options)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));


module.exports = mongoose;