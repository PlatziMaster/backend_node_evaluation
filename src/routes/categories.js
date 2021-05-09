const express = require("express");
const router = express.Router("router");
const {
  getCategories,
  createCategory,
  getCategoryById,
} = require("../controller/category");

router.get("/", async (req, res) => {
  const categories = await getCategories();
  res.status(200).send(categories);
});

router.post("/", async (req, res) => {
  const category = await createCategory(req.body);

  res.status(200).send(category);
});

router.get("/:id", async (req, res) => {
  const category = await getCategoryById(req.params.id);
  console.log(category);
  res.status(200).send(category);
});
module.exports = router;
