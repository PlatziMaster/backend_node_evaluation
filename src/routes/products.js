const express = require("express");
const ProductsService = require("../services/products.js");
//mock products before atlas
//const { productsMock } = require("../utils/mocks/products");

function productsApi(app) {
  const router = express.Router();
  app.use("/api/products", router);

  const productsService = new ProductsService();

  router.get("/", async function (req, res, next) {
    const { tags } = req.query;
    try {
      //const products = await Promise.resolve(productsMock);
      const products = await productsService.getProducts({ tags });

      res.status(200).json({
        data: products,
        message: "Products Listed",
      });
    } catch (err) {
      console.log("something happened listing all products");
      next(err);
    }
  });

  router.get("/:productId", async function (req, res, next) {
    const { productId } = req.params;
    try {
      //const products = await Promise.resolve(productsMock[0]);
      const products = await productsService.getProduct({ productId });

      res.status(200).json({
        data: products,
        message: "Specified product listed",
      });
    } catch (err) {
      console.log("something happened listing specific id");
      next(err);
    }
  });

  router.post("/", async function (req, res, next) {
    const { body: product } = req;

    //console.log(req.body);
    //console.log( { body: product } )
    try {
      //const createdProductId = await Promise.resolve(productsMock[0].productId);
      const createdProductId = await productsService.createProduct({ product });

      res.status(201).json({
        data: createdProductId,
        message: "Product created",
      });
    } catch (err) {
      console.log("something happened");
      next(err);
    }
  });

  router.put("/:productId", async function (req, res, next) {
    const { body: product } = req;
    const { productId } = req.params;
    try {
      //const updatedProductId = await Promise.resolve(productsMock[0].productId);
      const updatedProductId = await productsService.updateProduct({
        productId,
        product,
      });

      res.status(200).json({
        data: updatedProductId,
        message: "Product updated",
      });
    } catch (err) {
      console.log("something happened");
      next(err);
    }
  });

  router.delete("/:productId", async function (req, res, next) {
    const { productId } = req.params;

    try {
      // const deletedProductId = await Promise.resolve(
      //   productsMock[0].productId
      // );
      const deletedProductId = await productsService.deleteProduct({
        productId,
      });

      res.status(200).json({
        data: deletedProductId,
        message: "Product deleted",
      });
    } catch (err) {
      console.log("something happened");
      next(err);
    }
  });
}

module.exports = productsApi;
