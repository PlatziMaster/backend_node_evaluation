const COLLECTION_NAME = "products";
const { ObjectId } = require("bson");
const { db } = require("../lib/mongo");
const { getCategoryById } = require("./category");

const getProducts = async () => {
  let dbRef = await db();
  const products = await dbRef.collection(COLLECTION_NAME).find({}).toArray();
  return products;
};

const getProductById = async (id) => {
  let dbRef = await db();
  let uid = ObjectId(id);
  const product = await dbRef.collection(COLLECTION_NAME).findOne({ _id: uid });
  return product;
};

const createProduct = async (data) => {
  let dbRef = await db();
  let { name, price, description, categoryId, image } = data;
  let uidCategory = ObjectId(categoryId);
  const product = dbRef.collection(COLLECTION_NAME).insertOne({
    name: name,
    price: price,
    description: description,
    image: image,
    categoryId: { $ref: "categories", $id: uidCategory },
  });
  return product;
};

const updateProduct = async (id, data) => {
  let dbRef = await db();
  let uid = ObjectId(id);
  let update = { ...data };
  if (data.categoryId) {
    let uidCategory = ObjectId(data.categoryId);
    update.categoryId = { $ref: "categories", $id: uidCategory };
  }
  await dbRef
    .collection(COLLECTION_NAME)
    .updateOne({ _id: uid }, { $set: { ...update } });

  const product = await getProductById(id);
  console.log(product);
  return product;
};

const deleteProduct = async (id) => {
  let dbRef = await db();
  let uid = ObjectId(id);
  let count;
  await dbRef
    .collection(COLLECTION_NAME)
    .deleteOne({ _id: uid })
    .then((result) => {
      count = result.deletedCount;
    });

  return count;
};
module.exports = {
  getProducts,
  getProductById,
  createProduct,
  deleteProduct,
  updateProduct,
};
