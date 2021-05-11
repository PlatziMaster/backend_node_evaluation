const express = require('express');
const cors = require('cors');


var allowlist = ['https://www.luzdeluna-autohotel.com', 'https://master.drsmqkphy0xld.amplifyapp.com','http://localhost:3000']

var corsOptionsDelegate = function (req, callback) {
  var corsOptions;
  if (allowlist.indexOf(req.header('Origin')) !== -1) {
    corsOptions = { origin: true } // reflect (enable) the requested origin in the CORS response
  } else {
    corsOptions = { origin: false } // disable CORS for this request
  }
  callback(null, corsOptions) // callback expects two parameters: error and options
}
var indexRouter = require('./routes/index');
var productsRouter = require('./routes/products');
var categoriesRouter = require('./routes/categories');

var app = express();
app.use(express.json());
app.use(cors(corsOptionsDelegate));

app.use('/', indexRouter);
app.use('/products', productsRouter);
app.use('/categories', categoriesRouter);

module.exports = app;
