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

const updateCategory = async (id, data) => {
  let uid = ObjectId(id);
  await db()
    .collection(COLLECTION_NAME)
    .updateOne({ _id: uid }, { $set: { ...data } });
  const category = await getCategoryById(id);
  return category;
};

const deleteCategory = async (id) => {
  uid = ObjectId(id);

  let count;
  await db()
    .collection(COLLECTION_NAME)
    .deleteOne({ _id: uid })
    .then((result) => {
      count = result.deletedCount;
    });
  return count;
};
module.exports = {
  getCategories,
  createCategory,
  getCategoryById,
  updateCategory,
  deleteCategory,
};
