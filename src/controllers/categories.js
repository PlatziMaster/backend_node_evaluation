const db = require("../db");
const { CreateCategoryDto, UpdateCategoryDto } = require("../models/category");
const { getAll, getOne, create, update, deleteOne } = require("./generic");

const collection = "categories";

async function products(req, res) {
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
