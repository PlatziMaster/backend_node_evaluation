const { CreateProductDto, UpdateProductDto } = require("../models/product");
const { getAll, getOne, create, update, deleteOne } = require("./generic");

const collection = "products";

const validateCategory = async (db, product) => {
  const category = await db.collections.categories.findOneById(
    product.categoryId
  );
  return category == null
    ? [{ message: "the specified category does not exist" }]
    : [];
};

module.exports = {
  getAll: getAll(collection),
  getOne: getOne(collection),
  create: create(
    collection,
    CreateProductDto,
    "unexpected error while creating product"
    // validateCategory
  ),
  update: update(collection, UpdateProductDto),
  delete: deleteOne(collection),
};
