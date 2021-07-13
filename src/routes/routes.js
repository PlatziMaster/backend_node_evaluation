const express = require('express');
const product = require('../components/product/network');

const routes = function(server){
  server.use('/product', product);
};

module.exports = routes;