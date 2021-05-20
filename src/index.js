const { config } = require('./config');
const createApp = require('./app');

const app = createApp();

app.listen(config.port, err => {
  if (err) {
    console.error("Error starting application: ", err);
    return;
  }
});