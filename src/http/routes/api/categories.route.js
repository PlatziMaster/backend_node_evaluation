const express = require("express");
const controller = require("../../controllers/categories.controller");
const router = express.Router();

router.route("/").get(controller.list).post(controller.create);

router
  .route("/:id")
  .get(controller.id)
  .put(controller.update)
  .delete(controller.delete);

router.get("/:categoryId/products", controller.products);

module.exports = router;
