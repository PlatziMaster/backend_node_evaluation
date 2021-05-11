const { config } = require('./config/index');
const createApp = require('./app');

const connectDB = require('./config/db');

connectDB()

const app = createApp();

app.listen(config.port, err => {
  if (err) {
    console.error("Error: ", err);
    return;
  }
});