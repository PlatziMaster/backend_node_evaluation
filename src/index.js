const { config } = require('./config');
const createApp = require('./app');
const app = createApp();

app.listen(config.port, err => {
  console.log('iniciando en el puerto' + config.port)
  if (err) {
    return console.error("Error: ", err);
  }
});
