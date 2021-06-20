const express = require("express");
const CategoriesService = require("../services/categories.js");
//mock categories before atlas
//const { categoriesMock } = require("../utils/mocks/categories");

function categoriesApi(app) {
  const router = express.Router();
  app.use("/api/categories", router);

  const categoriesService = new CategoriesService();

  router.get("/", async function (req, res, next) {
    const { tags } = req.query;
    try {
      //const categories = await Promise.resolve(categoriesMock);
      const categories = await categoriesService.getCategories({ tags });

      res.status(200).json({
        data: categories,
        message: "Categories Listed",
      });
    } catch (err) {
      console.log("something happened");
      next(err);
    }
  });

  router.get("/:categoryId", async function (req, res, next) {
    const { categoryId } = req.params;
    try {
      //const categories = await Promise.resolve(categoriesMock[0]);
      const categories = await categoriesService.getCategory({ categoryId });

      res.status(200).json({
        data: categories,
        message: "Specified category listed",
      });
    } catch (err) {
      console.log("something happened");
      next(err);
    }
  });

  router.post("/", async function (req, res, next) {
    
    const { body: category } = req;

    //console.log(req.body);
    //console.log( { body: category } )
    try {
      //const createdCategoryId = await Promise.resolve(categoriesMock[0].categoryId);
      const createdCategoryId = await categoriesService.createCategory({category});

      res.status(201).json({
        data: createdCategoryId,
        message: "Category created",
      });
    } catch (err) {
      console.log("something happened");
      next(err);
    }
  });

  router.put("/:categoryId", async function (req, res, next) {
    const { body: category } = req;
    const { categoryId } = req.params;
    try {
      //const updatedCategoryId = await Promise.resolve(categoriesMock[0].categoryId);
      const updatedCategoryId = await categoriesService.updateCategory({
        categoryId,
        category,
      });

      res.status(200).json({
        data: updatedCategoryId,
        message: "Category updated",
      });
    } catch (err) {
      console.log("something happened");
      next(err);
    }
  });

  router.delete("/:categoryId", async function (req, res, next) {
    const { categoryId } = req.params;

    try {
      // const deletedCategoryId = await Promise.resolve(
      //   categoriesMock[0].categoryId
      // );
      const deletedCategoryId = await categoriesService.deleteCategory(
        {categoryId}
      );

      res.status(200).json({
        data: deletedCategoryId,
        message: "Category deleted",
      });
    } catch (err) {
      console.log("something happened");
      next(err);
    }
  });
}

module.exports = categoriesApi;
