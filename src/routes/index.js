const express = require('express');

const app = express();

app.use(require('./products'));
app.use(require('./categories'));


module.exports = app;
