const express = require("express");
const router = express.Router();

const controller = require("../controllers/categories");

// define the home page route
router.get("/", controller.getAll);
router.get("/:id", controller.getOne);

module.exports = router;
