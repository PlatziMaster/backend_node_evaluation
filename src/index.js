const { config } = require('./config');
const createApp = require('./app');
const app = createApp();

const productsApi = require('./routes/products.js');

productsApi(app)

 app.get('/', function(req, res) {
  res.send('api Platzi!');
});



app.listen(config.port, err => {
  console.log(`Listening http://localhost:${config.port}`);
  if (err) {
    console.error("Error: ", err);
    return;
  }
});