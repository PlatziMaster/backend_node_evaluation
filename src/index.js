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
const DB_URL = `${config.dbConnection}://${config.dbHost}:${config.dbPort}/${config.dbName}`;
mongoose.connect(DB_URL,  {
        "auth": { "authSource": "admin" },
        "user": config.dbUser,
        "pass": config.dbPassword,
        "useNewUrlParser": true,
    }, (err, res) => {
        if(err) throw err
        console.log('DB Connected.')
        app.listen(config.port, err => {
            console.log(`Server listening at port ${config.port}`)
            if (err) {
            console.error("Error: ", err);
            return;
        }
    });
})