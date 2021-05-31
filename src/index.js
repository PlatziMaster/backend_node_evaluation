const { config } = require('./config');
//mongoose -> mongoAtlas
require('./config/db');
const createApp = require('./app');

const app = createApp();

app.listen(config.port, err => {
  if (err) {
    console.error("Error: ", err);
    return;
  }
  console.log('Ok Server');
});