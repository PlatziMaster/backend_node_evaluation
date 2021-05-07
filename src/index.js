const { config } = require('./config');
const createApp = require('./app');
const app = createApp();

app.listen(config.port, err => {
  if (err) {
    return console.error("Error: ", err);
  }
});
