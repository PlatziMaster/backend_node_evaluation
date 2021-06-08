const { config } = require('./config');
const createApp = require('./app');
require('./database')

const app = createApp();

app.listen(config.port, err => {
  console.log('Server on port:', process.env.PORT)
  if (err) {
    console.error("Error: ", err);
    return;
  }
});