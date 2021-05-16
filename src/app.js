const express = require('express');
const cors = require('cors');
const productsServices = require('../e2e/product.e2e.js')
const categoriesServices = require('../e2e/categories.e2e.js');
const { restart } = require('nodemon');

function createApp() { 
  const app = express();
  app.use(cors());
  app.use(express.json());
  app.get('/products/', (req,res, next) => {
    const listProducts = productsServices
    res.status(200).json()
  });
  app.get('/products/{id}', (req,res, next) => {
    const listProducts = productsServices
    res.status(200).json()
  });
  app.post('/products/', async function (req, res, next){
    try {
      const createProductId = await productsServices()
      res.status(201).json({
        data: createdProductId,
        message: 'Product created'
      })
    } catch (err){
      next(err)
    }

  }
  );
  app.put('/products/{id}', async function (req, res, next) {
    const {productId} = req.params;
    try {
      const createProductId = await productsServices(productId)
      res.status(200).json({
        data: updatedProductId,
        message: 'Product updated'
      })
    }
    catch (err){
      next(err)
    }
   });
  app.delete('/products/{id}', async function (req, res, next) {
    try {
      const createProductId = await productsServices(productId)
      res.status(200).json({
        data: deletedProductId,
        message: 'Product deleted'
      });
    } catch (err){
      next(err)
    }

  });

 
  

  return app;
}

module.exports = createApp;
