const express = require('express');
const ProductService = require('../services/products.js')

const {
   productIdSchema,
   createProductSchema,
   updateProductSchema
 } = require('../utils/schemas/product.js');

const validationHandler = require('../middleware/validation-handlers.js');

const  cacheResponse = require('../utils/cacheResponse');
const {A_MINUTE_IN_SECONDS} = require('../utils/time');

function productsApi(app){
    const productService = new ProductService();

    //app.use('/api/products',router);

    app.get("/api/products", async function(req,res,next){
      cacheResponse(res,A_MINUTE_IN_SECONDS);
     //const {  category } = req.query;
     try{
        const products = await productService.getProducts();

        res.status(200).json( products );
     }catch(error){
        next(error);
     }   
    });

    app.get("/api/products/:productId",validationHandler({ productId: productIdSchema }, 'params'), async function(req,res,next){
      cacheResponse(res,A_MINUTE_IN_SECONDS);
       const { productId } = req.params;
      try{
         const product = await productService.getProduct(productId);
         res.status(200).json( product );
      }catch(error){
         next(error);
      }   
     });

     app.post("/api/products", validationHandler(createProductSchema), async function(req,res,next){
      const { body: product } = req;
     try{
        const products = await productService.createProduct(product);
        res.status(201).json(
             products
        );
     }catch(error){
        next(error);
     }   
    });

    app.put("/api/products/:productId",
    validationHandler({ productId: productIdSchema }, 'params'),
    validationHandler(updateProductSchema),
     async function(req,res,next){
      const { productId } = req.params;
      const { body: product } = req;
     try{
        const products = await productService.updateProduct(productId,product);
        res.status(200).json( products );
     }catch(error){
        next(error);
     }   
    });

    app.delete("/api/products/:productId",
    validationHandler({ productId: productIdSchema }, 'params'),
   async function(req,res,next){
      const { productId } = req.params;
     try{
        const product = await productService.deleteProduct(productId);
        res.status(200).json( product.deletedCount>0 );
     }catch(error){
        next(error);
     }   
    });



    

    
    



}

module.exports = productsApi;