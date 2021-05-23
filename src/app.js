const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const createError = require('http-errors');
const productRoute = require('./routes/product.route');
const categoryRoute = require('./routes/category.route');

require('./db')();

function createApp() { 
  const app = express();
  app.use(cors());
  app.use(express.json());

  // ADD YOUR ROUTES
  app.use('/api/products/', productRoute);
  app.use('/api/categories/', categoryRoute);
  
  app.use((req,res,next) => {
    next(createError(404,"Not Found"));
  });

  //Handling errors
  app.use((err,req,res,next)=> {
    res.status(err.status || 500);
    res.send({
      error: {
        status: err.status || 500,
        message: err.message
      }
    });
  });

  return app;
}

module.exports = createApp;
