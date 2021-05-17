const express = require('express');
const path = require('path');
const ProductService = require('./services/index');

const createApp = () => {
  const router = express.Router();
  app.use('/api/', router);

  const ProductService = new ProductService();

  router.get('/products', async (req, res, next) => {
      const storeProducts = await ProductService.getProducts()
      res.status(200).json(storeProducts);
  });

  router.get('/products', async function (req, res, next ){
      const storeProductId = await  productService.getProductId(productId)
      res.status(200).json(storeProductId);
  });


  router.post('/products', async function (req, res, next ){
    try {
      const createProductId = await  productService.createProduct( product )
      res.status(201).json({
        data: createdProductId,
        message: 'Product created'
      });
    } catch (err){
      next(err)
    }
  });

  router.delete('/products', async function (req, res, next ){
    try {
      const createProductId = await  productService.deleteProduct( productId )
      res.status(200).json({
        data: deletedProductId,
        message: 'Product deleted'
      });
    } catch (err){
      next(err)
    }
  });


  //ROUTES CATEGORIES 

  router.get('/categories', async (req, res, next) => {
    const storeCategories = await ProductService.getCategories()
    res.status(200).json(storeCategories);
});

router.get('/categories', async function (req, res, next ){
    const storeCategorieId = await  productService.getCategorieId(categorieId)
    res.status(200).json(storeCategorieId)
});


router.post('/categories', async function (req, res, next ){
  try {
    const createCategorieId = await  productService.createCategorieId( categorie )
    res.status(201).json({
      data: createdCategorieId,
      message: 'Categorie created'
    });
  } catch (err){
    next(err)
  }
});

router.delete('/categories', async function (req, res, next ){
  try {
    const createCategorieId = await  productService.deleteCategorie ( CategorieId )
    res.status(200).json({
      data: deletedCategorieId,
      message: 'Categorie deleted'
    });
  } catch (err){
    next(err)
  }
});



};
module.exports = createApp;
