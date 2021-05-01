const express = require('express');
const router = express.Router();

// Service
const categoriesService = require('../services/categories');



/* ************** GET endpoints ************** */
// Endpoint that returns a list of categories
router.get('/', async (req, res) => {
   try {
      let allCategoriesAvailable = await categoriesService.getAllCategories()

      return res.json(allCategoriesAvailable);
   } catch (error) {
      console.log(error);
   }
});

// Endpoint that returns just one pruduct especified by id
router.get('/:id', async (req, res) => {
   try {
      let requestedcategoryId = req.params.id;

      let category = await categoriesService.getOneCategoryById(requestedcategoryId)

      if (category) {
         res.json(category);
      } else {
         res.status(404).json({
            status: "Category not found"
         });
      }
   } catch (error) {
      console.log(error);
   }
});

// Endpoint that returns a list of products that match the category
router.get('/:categoryId/products', async (req, res) => {
   try {
      let requestedcategoryId = req.params.categoryId;

      let productsByCategory = await categoriesService.getProductsByCategoryId(requestedcategoryId);

      if (productsByCategory) {
         return res.json(productsByCategory);
      } else {
         return res.status(404).json({
            status: "This category does not exist"
         });
      }

   } catch (error) {
      console.log(error);
   }
});
/* ************** ************** ************** */


/* ************** POST endpoints ************** */
//Endpoint to used create a category
router.post('/', async (req, res) => {
   try {
      let categoryData = req.body;

      let savedCategory = await categoriesService.saveCategory(categoryData);

      res.status(201).json({
         productId: savedCategory.insertedId,
         status: "Category created"
      });
   } catch (error) {
      console.log(error);
   }
});
/* ************** ************** ************** */


/* ************** PUT endpoints ************** */
// Endpoint used to modify an existing category
router.put('/:id', async (req, res) => {
   try {
      let requestedCategoryId = req.params.id;
      let newCategoryData = req.body;

      let updatedCategory = await categoriesService.updateCategory(requestedCategoryId, newCategoryData);

      if (updatedCategory) {
         return res.json({
            updatedCategoryId: requestedCategoryId,
            status: "Category modified"
         });
      } else {
         return res.status(404).json({
            status: "Category not found"
         });
      }
   } catch (error) {
      console.log(error);
   }
});
/* ************** ************** ************** */


/* ************** DELETE endpoints ************** */
router.delete('/:id', async (req, res) => {
   try {
      let requestedCategoryId = req.params.id;

      let deletedCategory = await categoriesService.deleteCategory(requestedCategoryId);

      if (deletedCategory) {
         res.json({
            deletedCategoryId: requestedCategoryId,
            status: "Category deleted"
         });
      } else {
         return res.status(404).json({
            status: "Category not found"
         });
      }
   } catch (error) {
      console.log(error);
   }
});
/* ************** ************** ************** */

module.exports = router;