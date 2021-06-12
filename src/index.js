const { config } = require('./config');
const createApp = require('./app');

const app = createApp();

app.listen(config.port, err => {
  if (err) {
    console.error("Error: ", err);
    return;
  }
});

//adaptar para cada endpoint
app.get('/api/categories', (req, res) => {
  res.send('Successful response.');
  });