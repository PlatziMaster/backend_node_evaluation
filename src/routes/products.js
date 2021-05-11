const express = require('express');
const ProductService = require('../services/product');


function productsApi(app){
  const router = express.Router();
  app.use("/api/products",router);

const productService = new ProductService();


  router.get("/", async function(req,res,next){
    try {
      const products = await productService.getProducts();

      res.status(200).json({
        data: products,
        message: 'products listed'
      });
    } catch (err) {
      next(err);
    }
  });

  router.get("/:productId", async function(req,res,next){
    const {productId} = req.params;
    console.log(productId);
    try {
      const products = await productService.getProduct({productId});

      res.status(200).json({
        data: products,
        message: 'product retrieve'
      });
    } catch (err) {
      next(err);
    }
  });
  router.post("/", async function(req,res,next){
    const {body: product} = req;
    try {
      const createdProductId = await productService.createProduct({product});
      res.status(201).json({
        data: createdProductId,
        message: 'product created'
      });
    } catch (err) {
      next(err);
    }
  });
  router.put("/:productId", async function(req,res,next){
    const {productId} = req.params;
    const {body: product} = req;
    try {
      const updatedProductId = await productService.updateProduct({productId, product});

      res.status(200).json({
        data: updatedProductId,
        message: 'product updated'
      });
    } catch (err) {
      next(err);
    }
  });
  router.delete("/:productId", async function(req,res,next){
    const {productId} = req.params;
    try {
      const deletedProductId = await productService.deleteProduct({productId});

      res.status(200).json({
        data: deletedProductId,
        message: 'product deleted'
      });
    } catch (err) {
      next(err);
    }
  });
}
module.exports = productsApi;

// - [ ] GET `/api/products/` Endpoint para retornar la lista de productos.
// - [ ] GET `/api/products/{id}/` Endpoint para retornar un producto.
// - [ ] POST `/api/products/` Endpoint para crear un producto.
// - [ ] PUT `/api/products/{id}/` Endpoint para modificar un producto.
// - [ ] DELETE `/api/products/{id}/` Endpoint para eliminar un producto.
