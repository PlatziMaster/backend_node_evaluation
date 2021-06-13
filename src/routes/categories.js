const express = require("express");
//mock categories before atlas
const { categoriesMock } = require("../utils/mocks/categories");

function categoriesApi(app) {
  const router = express.Router();
  app.use("/api/categories", router);

  router.get("/", async function (req, res, next) {
    try {
      const categories = await Promise.resolve(categoriesMock);

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
    try {
      const categories = await Promise.resolve(categoriesMock[0]);

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
    try {
      const createdCategoryId = await Promise.resolve(categoriesMock[0].categoryId);

      res.status(201).json({
        data: createdCategoryId,
        message: "Categorie created",
      });
    } catch (err) {
      console.log("something happened");
      next(err);
    }
  });

  router.put("/:categoryId", async function (req, res, next) {
    try {
      const updatedCategoryId = await Promise.resolve(categoriesMock[0].categoryId);

      res.status(200).json({
        data: updatedCategoryId,
        message: "Categorie updated",
      });
    } catch (err) {
      console.log("something happened");
      next(err);
    }
  });

  router.delete("/:categoryId", async function (req, res, next) {
    try {
      const deletedCategoryId = await Promise.resolve(categoriesMock[0].categoryId);

      res.status(200).json({
        data: deletedCategoryId,
        message: "Movie Deleted",
      });
    } catch (err) {
      console.log("something happened");
      next(err);
    }
  });



}

module.exports = categoriesApi;
