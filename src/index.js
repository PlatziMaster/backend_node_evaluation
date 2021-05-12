const { config } = require('./config');
const createApp = require('./app');
const mongoose = require('mongoose');

const app = createApp();

app.listen(config.port, err => {
  if (err) {
    console.error("Error: ", err);
    return;
  }
  else{
    console.log(`Server on port ${config.port}`);
  }
});

mongoose.connect(`mongodb://${config.dbHost}:${config.dbPort}/${config.dbName}`, { useNewUrlParser: true })
.then(db => console.log('Db connected'))
.catch(err => console.log(err));