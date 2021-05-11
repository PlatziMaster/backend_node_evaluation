var express = require("express");
//var dbproducts = require('../db/products/products');

var router = express.Router();

router.get("/", async (req, res) => {
  //var result = await dbproducts.getAllProducts();
  //res.status(200).send(result);
});

module.exports = router;