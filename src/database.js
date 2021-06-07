const { config } = require('./config');
const mongoose = require('mongoose')

// Create URI Mongodb - LOCAL
//const MONGO_URI = `mongodb://${config.dbHost}/${config.dbName}`

// Create URI Mongodb - Atlas
const MONGO_URI =  `mongodb+srv://${config.dbUser}${config.dbPassword}${config.dbHost}${config.dbName}${config.dbConnection}`

console.log(MONGO_URI)
// Connect whit de db
mongoose.connect(MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true
})
    .then(db => console.log('Database is connected'))
    .catch(err => console.log(err))

// Unique Error
//mongoose.set('useCreateIndex', true)
//mongoose.set('useFindAndModify', false)