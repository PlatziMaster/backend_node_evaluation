const express = require('express');
const app = require('./config/index.js');
const ProductService = require('./services/index');
const { config } = require('./config/index');
const createApp = require('./routes/index');
createApp(app);



