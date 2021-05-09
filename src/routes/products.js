const express = require("express");
const router = express.Router("router");

const {
  getProducts,
  getProductById,
  createProduct,
  deleteProduct,
} = require("../controller/products");

router.get("/", async (req, res) => {
  let products = await getProducts();
  res.status(200).send(products);
});

router.get("/:id", async (req, res) => {
  let product = await getProductById(req.params.id);
  res.status(200).send(product);
});

router.post("/", async (req, res) => {
  console.log("creatingProduct");
  let product = await createProduct(req.body);
  res.status(200).send(product);
});

router.delete("/:id", async (req, res) => {
  let count = await deleteProduct(req.params.id);
  res.status(200).send(`${count} file was deleted`);
});

module.exports = router;
