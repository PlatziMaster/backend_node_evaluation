const express = require('express');
const ProductService = require('../services/products.js')

function productsApi(app){
    const router = express.Router();
    const productService = new ProductService();

    app.use('/json/api/products/',router);

    router.get("/", async function(req,res,next){
     const {  category } = req.query;
     try{
        const products = await productService.getProducts(category);
        res.status(200).json({
            data: products,
            message : "Products list"
        });
     }catch{
        next(error);
     }   
    });

    router.get("/:productId", async function(req,res,next){
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

     router.post("/", async function(req,res,next){
      const { body: product } = req;
     try{
        const products = await productService.createProduct({product});
        res.status(201).json({
            data: products,
            message : "Product was created succesfully!"
        });
     }catch(error){
        next(error);
     }   
    });

    router.put("/:productId", async function(req,res,next){
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

    router.delete("/:productId", async function(req,res,next){
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