const { config } = require('./config');
const createApp = require('./app');

const app = createApp();

app.listen(config.port, err => {
  if (err) {
    console.error("Error: ", err);
    return;
  }
  else{
    console.log(`Inicio Correcto, app escuchando en el puerto ${config.port}`);
  }
});