const { config } = require('./config');
const createApp = require('./app');
const { testConnection } = require('./db/connection.js');
const { findAll, create, remove } = require('./db/queries.js');

const app = createApp();

app.listen(config.port, err => {
  if (err) {
    console.error("Error: ", err);
    return;
  }
});
