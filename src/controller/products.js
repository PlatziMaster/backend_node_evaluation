const COLLECTION_NAME = "products";
const { ObjectId } = require("bson");
const { db } = require("../lib/mongo");
const { getCategoryById } = require("./category");

const getProducts = async () => {
  const products = await db().collection(COLLECTION_NAME).find({}).toArray();
  return products;
};

const getProductById = async (id) => {
  let uid = ObjectId(id);
  const product = await db().collection(COLLECTION_NAME).findOne({ _id: uid });
  return product;
};

const createProduct = async (data) => {
  let { name, price, description, categoryId, image } = data;
  console.log(categoryId);
  let uidCategory = ObjectId(categoryId);
  const product = db()
    .collection(COLLECTION_NAME)
    .insertOne({
      name: name,
      price: price,
      description: description,
      image: image,
      categoryId: { $ref: "categories", $id: uidCategory },
    });
  return product;
};

const updateProduct = async (id, data) => {
  let uid = ObjectId(id);
  let update = { ...data };
  if (data.categoryId) {
    let uidCategory = ObjectId(data.categoryId);
    update.categoryId = { $ref: "categories", $id: uidCategory };
  }
  await db()
    .collection(COLLECTION_NAME)
    .updateOne({ _id: uid }, { $set: { ...update } });

  const product = await getCategoryById(id);
  return product;
};

const deleteProduct = async (id) => {
  let uid = ObjectId(id);
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
  getProducts,
  getProductById,
  createProduct,
  deleteProduct,
};
