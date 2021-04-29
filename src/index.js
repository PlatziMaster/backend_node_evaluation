const { config } = require('./config');
const createApp = require('./app');
const mongoMain = require("./config/mongo")

const mongo = new mongoMain();

const app = createApp();
mongo.connect()

app.listen(config.port, err => {
  if (err) {
    console.error("Error: ", err);
    return;
  }
});