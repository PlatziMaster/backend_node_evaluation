const express = require("express");
const router = express.Router();

const controller = require("../controllers/categories");

router.get("/", controller.getAll);
router.get("/:id", controller.getOne);
router.post("/", controller.create);
router.put("/:id", controller.update);
router.delete("/:id", controller.delete);
router.get("/:id/products", controller.products);

module.exports = router;
