const express = require('express');
const router = express.Router();

// Service
//const categoryService = require('../services/categories');



/* ************** GET endpoints ************** */
// Endpoint that returns a list of categories
router.get('/', async (req, res) => {
   try {
      res.json({
         response: "endpoint that returns a list of categories"
      });
   } catch (error) {
      console.log(error);
   }
});

// Endpoint that returns just one pruduct especified by id
router.get('/:id', async (req, res) => {
   try {
      let requestedcategory = req.params.id;

      res.json({
         response: "Endpoint that returns just one category especified by id",
         category: requestedcategory,
      });
   } catch (error) {
      console.log(error);
   }
});

// Endpoint that returns a list of products that match the category
router.get('/:categoryId/products', async (req, res) => {
   try {
      let productsList = req.params.categoryId;

      res.json({
         response: "Endpoint that returns a list of products that match the category",
         productsList: productsList,
      });
   } catch (error) {
      console.log(error);
   }
});
/* ************** ************** ************** */


/* ************** POST endpoints ************** */
//Endpoint to used create a category
router.post('/', async (req, res) => {
   try {
      let { category } = req.body;

      res.status(201).json({
         category: category,
         status: "category created"
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
      let { category } = req.body;

      res.json({
         replacedcategory: category,
         status: "category modified"
      });
   } catch (error) {
      console.log(error);
   }
});
/* ************** ************** ************** */


/* ************** DELETE endpoints ************** */
router.delete('/:id', async (req, res) => {
   try {
      let { category } = req.body;

      res.json({
         deletedcategory: category,
         status: "category deleted"
      });
   } catch (error) {
      console.log(error);
   }
});
/* ************** ************** ************** */

module.exports = router;