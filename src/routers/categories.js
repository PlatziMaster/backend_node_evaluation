const express = require("express");
const router = express.Router();

const controller = require("../controllers/categories");

// define the home page route
router.get("/", controller.getAll);
router.get("/:id", controller.getOne);
router.post("/", controller.create);
router.put("/:id", controller.update);

module.exports = router;
