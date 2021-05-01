const express = require('express');
const router = express.Router();

// Service
const productService = require('../services/products');

/* ************** GET endpoints ************** */
// Endpoint that returns a list of products
router.get('/', async (req, res) => {
   try {
      let allAvailableProducts = await productService.getAllProducts();

      if (allAvailableProducts) {
         return res.json(allAvailableProducts);
      }
   } catch (error) {
      console.log(error);
   }
});

// Endpoint that returns just one pruduct especified by id
router.get('/:id', async (req, res) => {
   try {
      let requestedProduct = req.params.id;
      console.log(requestedProduct)
      let product = await productService.getOneProductById(requestedProduct);

      console.log(product)
      if (product) {
         return res.json(product);
      } else {
         return res.json({
            status: "product not found"
         })
      }

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