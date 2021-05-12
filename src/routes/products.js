var express = require("express");
var dbproducts = require("../db/products");
var validator = require("../db/models/products");

var router = express.Router();

router.get("/", async (req, res) => {
  var result = await dbproducts.getProducts();
  res.status(200).send(result);
});

router.get("/:productId", async (req, res) => {
  const {productId} = req.params;
  var result = await dbproducts.getProduct(productId);
  res.status(200).send(result);
});

router.post("/", async (req, res) => {
  
  if (Object.keys(req.body).length<=0)
    return res.status(400).send({
      error:"Data Error",
      message: "please send your data as json in request body",
    });

    var v = validator.validProduct(req.body);
    if (!v.valid)
    return res.status(400).send({error:"Validation Error",message:v.errors});

    const product = req.body;
    var result = await dbproducts.insertProduct(product);
    return res.status(201).send(result);

});

router.put("/:productId", async (req, res) => {
  
  if (Object.keys(req.body).length<=0)
    return res.status(400).send({
      error:"Data Error",
      message: "please send your data as json in request body",
    });

    const {productId} = req.params;
    const product = req.body;
    var result = await dbproducts.updateProduct(productId,product);
    return res.status(200).send(result);

});

router.delete("/:productId", async (req, res) => {
  
    const {productId} = req.params;
    var result = await dbproducts.deleteProduct(productId);
    return res.status(200).send(result.deletedCount>0);

});

module.exports = router;
