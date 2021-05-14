const express = require('express');
const CategoriesService = require('../services/categories.js')

const {
   categoryIdSchema,
   createcategorySchema,
   updatecategorySchema
 } = require('../utils/schemas/categories.js');

const validationHandler = require('../middleware/validation-handlers.js');

const  cacheResponse = require('../utils/cacheResponse');
const {A_MINUTE_IN_SECONDS} = require('../utils/time');

function categoriesApi(app){
    const router = express.Router();
    const categoriesService = new CategoriesService();

    //app.use('/api/categories/',router);

    app.get("/api/categories/", async function(req,res,next){
      cacheResponse(res,A_MINUTE_IN_SECONDS);
     //const {  category } = req.query;
     try{
        const categories = await categoriesService.getCategories();

        res.status(200).json( categories);

     }catch(error){
        next(error);
     }   
    });

    app.get("/api/categories/:categoryId",validationHandler({ categoryId: categoryIdSchema }, 'params'), async function(req,res,next){
       cacheResponse(res,A_MINUTE_IN_SECONDS);
       const { categoryId } = req.params;
      try{
         const category = await categoriesService.getCategory(categoryId);
         res.status(200).json( category);
      }catch(error){
         next(error);
      }   
     });

     
    app.get("/api/categories/:categoryId/products",validationHandler({ categoryId: categoryIdSchema }, 'params'), async function(req,res,next){
      cacheResponse(res,A_MINUTE_IN_SECONDS);
      const { categoryId } = req.params;
     try{
        const category = await categoriesService.getProducts(categoryId);
        res.status(200).json( category);
     }catch(error){
        next(error);
     }   
    });

     app.post("/api/categories/", validationHandler(createcategorySchema), async function(req,res,next){
      const { body: category } = req;
     try{
        const categories = await categoriesService.createCategory(category);
        res.status(201).json( categories);
     }catch(error){
        next(error);
     }   
    });

    app.put("/api/categories/:categoryId",
    validationHandler({ categoryId: categoryIdSchema }, 'params'),
    validationHandler(updatecategorySchema),
     async function(req,res,next){
      const { categoryId } = req.params;
      const { body: category } = req;
     try{
        const categories = await categoriesService.updateCategory(categoryId,category);
        res.status(200).json( categories);
     }catch(error){
        next(error);
     }   
    });

    app.delete("/api/categories/:categoryId",
    validationHandler({ categoryId: categoryIdSchema }, 'params'),
   async function(req,res,next){
      const { categoryId } = req.params;
     try{
        const category = await categoriesService.deleteCategory(categoryId);
        res.status(200).json( category.deletedCount>0 );
     }catch(error){
        next(error);
     }   
    });
}

module.exports = categoriesApi;