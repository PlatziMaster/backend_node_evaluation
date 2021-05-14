const { config } = require('./config');
const createApp = require('./app');
const connect = require('./db-connect');

const app = createApp();

app.listen(config.port, async err => {
  if (err) {
    console.error("Error: ", err);
    return;
  }

  try {
    await connect()
  } catch (e) {
    console.error(e)
  }
});