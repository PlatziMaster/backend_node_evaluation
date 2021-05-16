//creación de un componenten para englobar todas la rutas permitiendonos escalar a mas componetes
const express = require('express');
const categories =  require('../components/category/network');
const products =  require('../components/product/network');

const routes =  function (server){
    server.use('/api/categories',categories),
    server.use('/api/products',products)
}   

module.exports = routes;