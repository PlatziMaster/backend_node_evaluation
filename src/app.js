const express = require('express');
const cors = require('cors');
const categoriesRoutes = require('./routes/category-routes');
const productRaoutes = require('./routes/product-routes');
const {mongoose} = require('./db/db');


function createApp() { 

  const html = `<h1>Hello to PlatziAPI</h1> \n
  <h3>Options:</h3>\n 
  <ul>\n
  <li><p>/api/categories</p></li>\n
  <li><p>/api/products</p></li>\n
  </ul>`;

  const app = express();
  app.use(cors());
  app.use(express.json());


  // Routes
  app.get('/', (req, res) => {res.send(html)});
  app.use('/api/categories', categoriesRoutes);
  app.use('/api/products', productRaoutes);

  return app;
}

module.exports = createApp;
