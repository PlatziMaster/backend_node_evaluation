const getDb = require("../db");
const { CreateCategoryDto, UpdateCategoryDto } = require("../models/category");
const { getAll, getOne, create, update, deleteOne } = require("./generic");

const collection = "categories";

async function products(req, res) {
  const db = await getDb();
  const category = await db.collections.categories.findOneById(req.params.id);
  if (!category) return res.status(404).json({ message: "Category not found" });
  const products = await db.collections.products.findAll({
    categoryId: req.params.id,
  });
  res.json(products);
}

module.exports = {
  getAll: getAll(collection),
  getOne: getOne(collection),
  create: create(
    collection,
    CreateCategoryDto,
    "unexpected error while creating category"
  ),
  update: update(collection, UpdateCategoryDto),
  delete: deleteOne(collection),
  products,
};
