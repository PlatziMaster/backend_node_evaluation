const express = require("express");
const cors = require("cors");

const ProductService = require("./services/products");
const response = require("./response");

function createApp() {
  const app = express();
  app.use(cors());
  app.use(express.json());

  const productService = new ProductService();

  // PRODUCT ROUTES
  app.post("/api/products/", async function (req, res, next) {
    const { body: product } = req;
    try {
      const createdProduct = await productService.createProduct({ product });
      response.success(req, res, createdProduct, 201);
    } catch (err) {
      next(err);
    }
  });

  app.put("/api/products/:id", async function (req, res, next) {
    const { productId } = req.params;
    const { body: product } = req;
    try {
      const updatedProductId = await productsService.updateProduct({
        productId,
        product,
      });
      const message = `El producto id ${updatedProductId} fue actualizado`;
      response.success(req, res, message, 200);
    } catch (err) {
      next(err);
    }
  });

  app.delete("/api/products/:id", async function (req, res) {
    const { productId } = req.params;
    try {
      const deletedProductId = await productsService.deleteProduct({
        productId,
      });
      const message = `El producto id ${deletedProductId} fue eliminado`;
      response.success(req, res, message, 200);
    } catch (err) {
      next(err);
    }
  });

  app.get("/api/products/", async function (req, res, next) {
    try {
      const products = await productService.getProducts();
      response.success(req, res, products, 200);
    } catch (err) {
      next(err);
    }
  });

  app.get("/api/products/:id", async function (req, res, next) {
    const { productId } = req.params;
    try {
      const product = await productService.getProduct({ productId });
      response.success(req, res, product, 200);
    } catch (err) {
      next(err);
    }
  });

  // CATEGORY ROUTES
  app.get("/api/categories", function (req, res) {
    res.send("GET request to the homepage");
  });

  app.get("/api/categories/:id", function (req, res) {
    res.send("GET request to the homepage");
  });

  app.post("/api/categories/", function (req, res) {
    res.send("POST request to the homepage");
  });

  app.put("/api/categories/:id", function (req, res) {
    res.send("PUT request to the homepage");
  });

  app.delete("/api/categories/:id", function (req, res) {
    res.send("DELETE request to the homepage");
  });

  app.get("/api/categories/:id/products", function (req, res) {
    res.send("GET request to the homepage");
  });

  return app;
}

module.exports = createApp;
