const { config } = require('./config');
const createApp = require('./app');
const app = createApp();

const productsApi = require('./routes/products.js');
const categoriesApi = require('./routes/categories.js');
const { logErrors, errorHandler, wrapErrors} = require('./middleware/error-handlers.js')
const notFoundHandler = require('./middleware/not-found-handler.js');

productsApi(app)
categoriesApi(app)
  

 app.get('/', function(req, res) {
  res.send('api Platzi!');
});

app.use(notFoundHandler);

app.use(logErrors)
app.use(wrapErrors)
app.use(errorHandler)


app.listen(config.port, err => {
  console.log(`Listening http://localhost:${config.port}`);
  if (err) {
    console.error("Error: ", err);
    return;
  }
});