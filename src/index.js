const { config } = require('./config');
require('./config/dbConn')

const createApp = require('./app');

const app = createApp();

app.listen(config.port, err => {
  if (err) {
    console.error("Error: ", err);
    return;
  }
});