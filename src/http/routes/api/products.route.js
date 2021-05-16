const express = require("express");
const controller = require("../../controllers/products.controller");
const router = express.Router();

router.route("/").get(controller.list).post(controller.create);

router
  .route("/:id")
  .get(controller.id)
  .put(controller.update)
  .delete(controller.delete);

module.exports = router;
