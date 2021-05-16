const express = require('express');
const cors = require('cors');
const product_routes = require('./routes/product')
const category_routes = require('./routes/category')

function createApp() { 
  const app = express();
  app.use(cors());
  app.use(express.json());
  app.use('/api/categories',category_routes);
  app.use('/api/products',product_routes);

  app.get("/",function(req,res){
    res.send("hola mundo");
  });
  return app;
}

module.exports = createApp;
