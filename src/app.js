const express = require('express');
const cors = require('cors');
const apiCategories = require('./routes/Categories')
const apiProducts = require('./routes/Products')




function createApp() { 
  const app = express();
  app.use(cors());
  app.use(express.json());

  // ADD YOUR ROUTES
  app.get('/',(req,res) => {
    res.json({
      email: 'fredy.ballesteros@gmail.com',
      arquitectura: '',
      herokudeploy: 'https://damp-harbor-12037.herokuapp.com/'
    })

  })

  //ROUTES CATEGORIES
  apiCategories(app);
  //ROUTES PRODUCTS
  apiProducts(app)

  

  return app;
}

module.exports = createApp;
