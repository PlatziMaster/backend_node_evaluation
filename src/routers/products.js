const express = require("express");
const router = express.Router();

const controller = require("../controllers/products");

router.get("/", function (req, res) {
  res.send("Products");
});

module.exports = router;
