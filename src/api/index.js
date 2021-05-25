const Router = require('express');
const product = require('./routes/product');
const category = require('./routes/category');

const app = Router();
product(app);
category(app);

module.exports = app;
