// Base
const createApp = require('./app');
const { config } = require('./config');
// Third Parties
const mongoose = require("mongoose")
// Project
const router = require('./router')

const app = createApp();

app.get('/', function(req, res) {
    res.send(router.stack);
});

// Connection with mongo DB and express initialization.
mongoose.connect(`${config.dbConnection}://${config.dbHost}:${config.dbPort}/${config.dbName}`,  {
        "auth": { "authSource": "admin" },
        "user": config.dbUser,
        "pass": config.dbPassword,
        "useMongoClient": true
    }, (err, res) => {
        if(err) throw err
        console.log('DB Connected.')
        app.listen(config.port, err => {
            console.log('Server listening at port 3000.')
            if (err) {
            console.error("Error: ", err);
            return;
        }
    });
})