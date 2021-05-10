const COLLECTION_NAME = "categories";
const { ObjectId } = require("bson");
const { db } = require("../lib/mongo");

const getCategories = async () => {
  let dbRef = await db();
  const categories = await dbRef.collection(COLLECTION_NAME).find({}).toArray();
  return categories;
};

const createCategory = async (categoryData) => {
  let dbRef = await db();
  console.log(dbRef);
  const category = await dbRef
    .collection(COLLECTION_NAME)
    .insertOne(categoryData);
  return category;
};

const getCategoryById = async (id) => {
  let dbRef = await db();
  let uid = ObjectId(id);
  const category = await dbRef
    .collection(COLLECTION_NAME)
    .findOne({ _id: uid });
  return category;
};

const updateCategory = async (id, data) => {
  let dbRef = await db();
  let uid = ObjectId(id);
  await dbRef
    .collection(COLLECTION_NAME)
    .updateOne({ _id: uid }, { $set: { ...data } });
  const category = await getCategoryById(id);
  return category;
};

const deleteCategory = async (id) => {
  let dbRef = await db();
  uid = ObjectId(id);

  let count;
  await dbRef
    .collection(COLLECTION_NAME)
    .deleteOne({ _id: uid })
    .then((result) => {
      count = result.deletedCount;
    });
  return count;
};

const getProductsByCategory = async (id) => {
  let dbRef = await db();
  let products = await dbRef
    .collection("products")
    .find({ "categoryId.$id": ObjectId(id) })
    .toArray();
  console.log(products);
  return products;
};
module.exports = {
  getCategories,
  createCategory,
  getCategoryById,
  updateCategory,
  deleteCategory,
  getProductsByCategory,
};
