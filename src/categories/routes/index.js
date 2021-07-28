const { Router } = require("express");

// services
const CategoriesService = require("../services");

// schemas validate
const {
  categoryIdSchema,
  createCategory,
  updateCategory,
} = require("../schemas/category");

// validate handler
const validationHandler = require("../../utils/middleware/validationHandler");

function categoriesRoutes(app) {
  const router = Router();
  app.use("/api/categories", router);

  const categoriesService = new CategoriesService();

  // routes handler

  // get all categories
  router.get("/", async (req, res, next) => {
    try {
      const categories = await categoriesService.getCategories();
      res.json(categories);
    } catch (err) {
      next(err);
    }
  });

  // get a category by id
  router.get(
    "/:id",
    validationHandler({ id: categoryIdSchema }, "params"),
    async (req, res, next) => {
      const { id } = req.params;

      try {
        const category = await categoriesService.getCategory(id);
        res.json(category);
      } catch (err) {
        next(err);
      }
    }
  );

  // create a category
  router.post(
    "/",
    validationHandler(createCategory),
    async (req, res, next) => {
      const { body: data } = req;

      try {
        const category = await categoriesService.createCategory(data);
        res.status(201).json(category);
      } catch (err) {
        next(err);
      }
    }
  );

  // get a category by id and update it
  router.put(
    "/:id",
    validationHandler({ id: categoryIdSchema }, "params"),
    validationHandler(updateCategory),
    async (req, res, next) => {
      const { id } = req.params;
      const { body: data } = req;

      try {
        const category = await categoriesService.updateCategory(id, data);
        res.json(category);
      } catch (err) {
        next(err);
      }
    }
  );

  // get a category by id and remove it
  router.delete(
    "/:id",
    validationHandler({ id: categoryIdSchema }, "params"),
    async (req, res, next) => {
      const { id } = req.params;

      try {
        const category = await categoriesService.deleteCategory(id);
        res.json(category);
      } catch (err) {
        next(err);
      }
    }
  );

  // get all products in a category
  router.get(
    "/:id/products",
    validationHandler({ id: categoryIdSchema }, "params"),
    async (req, res, next) => {
      const { id } = req.params;

      try {
        const products = await categoriesService.getProductsFromACategory(id);
        res.json(products);
      } catch (err) {
        next(err);
      }
    }
  );
}

module.exports = categoriesRoutes;
