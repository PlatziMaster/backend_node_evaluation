const express = require("express");
const router = express.Router("router");
const {
  getCategories,
  createCategory,
  getCategoryById,
  updateCategory,
  deleteCategory,
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

router.put("/:id", async (req, res) => {
  const category = await updateCategory(req.params.id, req.body);
  res.status(200).send(category);
});

router.delete("/:id", async (req, res) => {
  const count = await deleteCategory(req.params.id);
  res.status(200).send(`${count} file was deleted`);
});
module.exports = router;
