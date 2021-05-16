const { config } = require('./config');
const createApp = require('./app');

const app = createApp();

app.listen(config.port, () => {
  console.log(`La aplicación esta escuchando en el puerto http://localhost:${config.port}`);
});