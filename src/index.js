const createApp = require('./app');
const { config } = require('./api/config');

const app = createApp();

app.listen(config.port, err => {
  if (err) {
    console.error("Error starting application: ", err);
    return;
  }
  console.log('[app] Listening at port', config.port);
});