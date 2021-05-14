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

    app.use('/api/category/',router);

    router.get("/", async function(req,res,next){
      cacheResponse(res,A_MINUTE_IN_SECONDS);
     //const {  category } = req.query;
     try{
        const categorys = await categoriesService.getCategories();

        res.status(200).json({
            data: categorys,
            message : "categories list"
        });
     }catch(error){
        next(error);
     }   
    });

    router.get("/:categoryId",validationHandler({ categoryId: categoryIdSchema }, 'params'), async function(req,res,next){
       cacheResponse(res,A_MINUTE_IN_SECONDS);
       const { categoryId } = req.params;
      try{
         const category = await categoriesService.getCategory(categoryId);
         res.status(200).json({
             data: category,
             message : "category Detail"
         });
      }catch(error){
         next(error);
      }   
     });

     
    router.get("/:categoryId/products",validationHandler({ categoryId: categoryIdSchema }, 'params'), async function(req,res,next){
      cacheResponse(res,A_MINUTE_IN_SECONDS);
      const { categoryId } = req.params;
     try{
        const category = await categoriesService.getProducts(categoryId);
        res.status(200).json({
            data: category,
            message : "Products found in this Category"
        });
     }catch(error){
        next(error);
     }   
    });

     router.post("/", validationHandler(createcategorySchema), async function(req,res,next){
      const { body: category } = req;
     try{
        const categories = await categoriesService.createCategory(category);
        res.status(201).json({
            data: categories,
            message : "category was created succesfully!"
        });
     }catch(error){
        next(error);
     }   
    });

    router.put("/:categoryId",
    validationHandler({ categoryId: categoryIdSchema }, 'params'),
    validationHandler(updatecategorySchema),
     async function(req,res,next){
      const { categoryId } = req.params;
      const { body: category } = req;
     try{
        const categories = await categoriesService.updateCategory(categoryId,category);
        res.status(200).json({
            data: categories,
            message : "category was updated succesfully!"
        });
     }catch(error){
        next(error);
     }   
    });

    router.delete("/:categoryId",
    validationHandler({ categoryId: categoryIdSchema }, 'params'),
   async function(req,res,next){
      const { categoryId } = req.params;
     try{
        const categories = await categoriesService.deleteCategory(categoryId);
        res.status(200).json({
            data: categories,
            message : "category was deleted succesfully!"
        });
     }catch(error){
        next(error);
     }   
    });
}

module.exports = categoriesApi;