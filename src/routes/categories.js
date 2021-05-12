var express = require("express");
var dbcategories = require("../db/categories");
var dbproducts = require("../db/products");
var validator = require("../db/models/category");

var router = express.Router();

router.get("/", async (req, res) => {
  var result = await dbcategories.getCategories();
  res.status(200).send(result);
});

router.get("/:categoryId", async (req, res) => {
  const {categoryId} = req.params;
  var result = await dbcategories.getCategory(categoryId);
  res.status(200).send(result);
});

router.get("/:categoryId/products", async (req, res) => {
  const {categoryId} = req.params;
  var result = await dbproducts.getProductsByCategory(categoryId);
  res.status(200).send(result);
});

router.post("/", async (req, res) => {
  
  if (Object.keys(req.body).length<=0)
    return res.status(400).send({
      error:"Data Error",
      message: "please send your data as json in request body",
    });

    var v = validator.validCategory(req.body);
    if (!v.valid)
    return res.status(400).send({error:"Validation Error",message:v.errors});

    const category = req.body;
    var result = await dbcategories.insertCategory(category);
    return res.status(201).send(result);

});

router.put("/:categoryId", async (req, res) => {
  
  if (Object.keys(req.body).length<=0)
    return res.status(400).send({
      error:"Data Error",
      message: "please send your data as json in request body",
    });

    const {categoryId} = req.params;
    const category = req.body;
    var result = await dbcategories.updateCategory(categoryId,category);
    return res.status(200).send(result);

});

router.delete("/:categoryId", async (req, res) => {
  
    const {categoryId} = req.params;
    var result = await dbcategories.deleteCategory(categoryId);
    return res.status(200).send(result.deletedCount>0);

});

module.exports = router;
