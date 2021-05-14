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
    const router = express.Router();
    const productService = new ProductService();

    app.use('/json/api/products/',router);

    router.get("/", async function(req,res,next){
      cacheResponse(res,A_MINUTE_IN_SECONDS);
     //const {  category } = req.query;
     try{
        const products = await productService.getProducts();

        res.status(200).json({
            data: products,
            message : "Products list"
        });
     }catch(error){
        next(error);
     }   
    });

    router.get("/:productId",validationHandler({ productId: productIdSchema }, 'params'), async function(req,res,next){
      cacheResponse(res,A_MINUTE_IN_SECONDS);
       const { productId } = req.params;
      try{
         const product = await productService.getProduct(productId);
         res.status(200).json({
             data: product,
             message : "Product Detail"
         });
      }catch(error){
         next(error);
      }   
     });

     router.post("/", validationHandler(createProductSchema), async function(req,res,next){
      const { body: product } = req;
     try{
        const products = await productService.createProduct(product);
        res.status(201).json({
            data: products,
            message : "Product was created succesfully!"
        });
     }catch(error){
        next(error);
     }   
    });

    router.put("/:productId",
    validationHandler({ productId: productIdSchema }, 'params'),
    validationHandler(updateProductSchema),
     async function(req,res,next){
      const { productId } = req.params;
      const { body: product } = req;
     try{
        const products = await productService.updateProduct(productId,product);
        res.status(200).json({
            data: products,
            message : "Product was updated succesfully!"
        });
     }catch(error){
        next(error);
     }   
    });

    router.delete("/:productId",
    validationHandler({ productId: productIdSchema }, 'params'),
   async function(req,res,next){
      const { productId } = req.params;
     try{
        const products = await productService.deleteProduct(productId);
        res.status(200).json({
            data: products,
            message : "Product was deleted succesfully!"
        });
     }catch(error){
        next(error);
     }   
    });



    

    
    



}

module.exports = productsApi;