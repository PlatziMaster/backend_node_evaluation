const { Router } = require("express");

// services
const ProductsService = require("../services");

// schemas validate
const {
  productIdSchema,
  createProduct,
  updateProduct,
} = require("../schemas/product");

// validate handler
const validationHandler = require("../../utils/middleware/validationHandler");

function productsRoutes(app) {
  const router = Router();
  app.use("/api/products", router);

  const productsService = new ProductsService();

  // routes handler

  // get all products
  router.get("/", async (req, res, next) => {
    try {
      const products = await productsService.getProducts();
      res.json(products);
    } catch (err) {
      next(err);
    }
  });

  // get a product by id
  router.get(
    "/:id",
    validationHandler({ id: productIdSchema }),
    async (req, res, next) => {
      const { id } = req.params;

      try {
        const product = await productsService.getProduct(id);
        res.json(product);
      } catch (err) {
        next(err);
      }
    }
  );

  // create a product
  router.post("/", validationHandler(createProduct), async (req, res, next) => {
    const { body: data } = req;

    try {
      const product = await productsService.createProduct(data);
      res.status(201).json(product);
    } catch (err) {
      next(err);
    }
  });

  // get a product by id and update it
  router.put(
    "/:id",
    validationHandler({ id: productIdSchema }, "params"),
    validationHandler(updateProduct),
    async (req, res, next) => {
      const { id } = req.params;
      const { body: data } = req;

      try {
        const product = await productsService.updateProduct(id, data);
        res.json(product);
      } catch (err) {
        next(err);
      }
    }
  );

  // get a product by id and remove it
  router.delete(
    "/:id",
    validationHandler({ id: productIdSchema }, "params"),
    async (req, res, next) => {
      const { id } = req.params;

      try {
        const product = await productsService.deleteProduct(id);
        res.json(product);
      } catch (err) {
        next(err);
      }
    }
  );
}

module.exports = productsRoutes;
