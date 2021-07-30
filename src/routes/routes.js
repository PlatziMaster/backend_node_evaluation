const express = require('express');
const product = require('../components/product/network');
const category = require('../components/category/network');

const routes = function(server){
  server.use('/product', product);
  server.use('/category', category);
};

module.exports = routes;