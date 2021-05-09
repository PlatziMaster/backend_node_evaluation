const COLLECTION_NAME = "categories";
const { ObjectId } = require("bson");
const { db } = require("../lib/mongo");

const getCategories = async () => {
  const categories = await db().collection(COLLECTION_NAME).find({}).toArray();
  return categories;
};

const createCategory = async (categoryData) => {
  const category = await db()
    .collection(COLLECTION_NAME)
    .insertOne(categoryData);
  return category;
};

const getCategoryById = async (id) => {
  let uid = ObjectId(id);
  const category = await db().collection(COLLECTION_NAME).findOne({ _id: uid });
  return category;
};
module.exports = {
  getCategories,
  createCategory,
  getCategoryById,
};
