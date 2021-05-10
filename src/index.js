const { config } = require('./config');
const createApp = require('./app');

process.once("SIGUSR2", () => server.close(err => process.kill(process.pid, "SIGUSR2")));

const app = createApp();

app.listen(config.port, err => {
  if (err) {
    console.error("Error: ", err);
    return;
  }
});
