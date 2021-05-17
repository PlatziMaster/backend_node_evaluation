const express = require("express");
const cors = require("cors");

const ProductService = require("./services/products");
const CategoryService = require("./services/categories");
const response = require("./response");

function createApp() {
  const app = express();
  app.use(cors());
  app.use(express.json());

  const productService = new ProductService();
  const categoryService = new CategoryService();

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

  app.put("/api/products/:productId", async function (req, res, next) {
    const { productId } = req.params;
    const { body: product } = req;
    try {
      const updatedProductId = await productService.updateProduct({
        productId,
        product,
      });
      const message = `El producto fue actualizado`;
      response.success(req, res, message, 200);
    } catch (err) {
      next(err);
    }
  });

  app.delete("/api/products/:productId", async function (req, res, next) {
    const { productId } = req.params;
    try {
      const deletedProductId = await productService.deleteProduct({
        productId,
      });
      const message = `El producto fue eliminado`;
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

  app.get("/api/products/:productId", async function (req, res, next) {
    const { productId } = req.params;
    try {
      const product = await productService.getProduct({ productId });
      response.success(req, res, product, 200);
    } catch (err) {
      next(err);
    }
  });

  // CATEGORY ROUTES
  app.post("/api/categories/", async function (req, res, next) {
    const { body: category } = req;
    try {
      const createdCategory = await categoryService.createCategory({ category });
      response.success(req, res, createdCategory, 201);
    } catch (err) {
      next(err);
    }
  });

  app.put("/api/categories/:categoryId", async function (req, res, next) {
    const { categoryId } = req.params;
    const { body: category } = req;
    try {
      const updatedCategoryId = await categoryService.updateCategory({
        categoryId,
        category,
      });
      const message = `La categoría fue actualizada`;
      response.success(req, res, message, 200);
    } catch (err) {
      next(err);
    }
  });

  app.delete("/api/categories/:categoryId", async function (req, res, next) {
    const { categoryId } = req.params;
    try {
      const deletedCategoryId = await categoryService.deleteCategory({
        categoryId,
      });
      const message = `La categoría fue eliminada`;
      response.success(req, res, message, 200);
    } catch (err) {
      next(err);
    }
  });

  app.get("/api/categories", async function (req, res, next) {
    try {
      const categories = await categoryService.getCategories();
      response.success(req, res, categories, 200);
    } catch (err) {
      next(err);
    }
  });

  app.get("/api/categories/:categoryId", async function (req, res) {
    const { categoryId } = req.params;
    try {
      const category = await categoryService.getCategory({ categoryId });
      response.success(req, res, category, 200);
    } catch (err) {
      next(err);
    }
  });

  return app;
}

module.exports = createApp;
