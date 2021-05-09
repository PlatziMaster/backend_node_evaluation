const COLLECTION_NAME = "products";
const { db } = require("../lib/mongo");

const getProducts = async () => {
  const products = await db().collection(COLLECTION_NAME).find({}).toArray();
  return products;
};

module.exports = {
  getProducts,
};
