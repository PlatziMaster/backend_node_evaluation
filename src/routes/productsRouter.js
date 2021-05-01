const express = require('express');
const router = express.Router();

// Service
const productService = require('../services/products');

/* ************** GET endpoints ************** */
// Endpoint that returns a list of products
router.get('/', async (req, res) => {
   try {
      res.json({
         response: "endpoint that returns a list of products"
      });
   } catch (error) {
      console.log(error);
   }
});

// Endpoint that returns just one pruduct especified by id
router.get('/:id', async (req, res) => {
   try {
      let requestedProduct = req.params.id;

      res.json({
         response: "Endpoint that returns just one pruduct especified by id",
         product: requestedProduct,
      });
   } catch (error) {
      console.log(error);
   }
});
/* ************** ************** ************** */


/* ************** POST endpoints ************** */
//Endpoint to used create a product
router.post('/', async (req, res) => {
   try {
      let product  = req.body;

      let savedProduct =  await productService.saveProduct(product);

      res.status(201).json({
         product: savedProduct,
         status: "product created"
      });
   } catch (error) {
      console.log(error);
   }
});
/* ************** ************** ************** */


/* ************** PUT endpoints ************** */
// Endpoint used to modify an existing product
router.put('/:id', async (req, res) => {
   try {
      let { product } = req.body;

      res.json({
         replacedProduct: product,
         status: "product modified"
      });
   } catch (error) {
      console.log(error);
   }
});
/* ************** ************** ************** */


/* ************** DELETE endpoints ************** */
router.delete('/:id', async (req, res) => {
   try {
      let { product } = req.body;

      res.json({
         deletedProduct: product,
         status: "product deleted"
      });
   } catch (error) {
      console.log(error);
   }
});
/* ************** ************** ************** */

module.exports = router;