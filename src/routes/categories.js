const express = require('express');
const CategoryService = require('../services/category');
const ProductService = require('../services/product');


function categoriesApi(app){
  const router = express.Router();
  app.use("/api/categories",router);

const categoryService = new CategoryService();
const productService = new ProductService();


  router.get("/", async function(req,res,next){
    try {
      const categories = await categoryService.getCategories();

      res.status(200).json({
        data: categories,
        message: 'categories listed'
      });
    } catch (err) {
      next(err);
    }
  });

  router.get("/:categoryId", async function(req,res,next){
    const {categoryId} = req.params;
    try {
      const categories = await categoryService.getCategory({categoryId});

      res.status(200).json({
        data: categories,
        message: 'category retrieve'
      });
    } catch (err) {
      next(err);
    }
  });
  router.get("/:categoryId/products", async function(req,res,next){
    const {categoryId} = req.params;

    try {
      // const category = await categoryService.getCategory({categoryId});
      const products = await productService.getProductsByCategory({categoryId});

      res.status(200).json({
        data: products,
        message: 'products by category retrieve'
      });
    } catch (err) {
      next(err);
    }
  });


  router.post("/", async function(req,res,next){
    const {body: category} = req;
    try {
      const createdCategoryId = await categoryService.createCategory({category});
      res.status(201).json({
        data: createdCategoryId,
        message: 'category created'
      });
    } catch (err) {
      next(err);
    }
  });

  router.put("/:categoryId", async function(req,res,next){
    const {categoryId} = req.params;
    const {body: category} = req;
    try {
      const updatedCategoryId = await categoryService.updateCategory({categoryId, category});

      res.status(200).json({
        data: updatedCategoryId,
        message: 'category updated'
      });
    } catch (err) {
      next(err);
    }
  });
  router.delete("/:categoryId", async function(req,res,next){
    const {categoryId} = req.params;
    try {
      const deletedCategoryId = await categoryService.deleteCategory({categoryId});

      res.status(200).json({
        data: deletedCategoryId,
        message: 'category deleted'
      });
    } catch (err) {
      next(err);
    }
  });
}
module.exports = categoriesApi;

// - [ ] GET `/api/categories/` Endpoint para retornar la lista de categoryos.
// - [ ] GET `/api/categories/{id}/` Endpoint para retornar un categoryo.
// - [ ] POST `/api/categories/` Endpoint para crear un categoryo.
// - [ ] PUT `/api/categories/{id}/` Endpoint para modificar un categoryo.
// - [ ] DELETE `/api/categories/{id}/` Endpoint para eliminar un categoryo.
