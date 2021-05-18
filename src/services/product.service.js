const MongoLib = require("../lib/mongo");

class ProductService {
  constructor() {
    this.collection = "products";
    this.mongoDB = new MongoLib();
  }
  async getAll(query) {
    query = query || {};
    const products = await this.mongoDB.getAll(this.collection, query);
    return products || [];
  }
  async getById({ id }) {
    const product = await this.mongoDB.get(this.collection, id);
    return product || {};
  }
  async createProduct({ product }) {
    const createProductId = await this.mongoDB.create(this.collection, product);
    return createProductId;
  }
  async updateProduct({ id, product }) {
    const update = await this.mongoDB.update(this.collection, product, id);
    const updatedProductId = await this.mongoDB.get(
      this.collection,
      update._id
    );
    return updatedProductId;
  }
  async deleteProduct({ id }) {
    const deleteProductId = await this.mongoDB.delete(this.collection, id);
    return deleteProductId;
  }
}
module.exports = ProductService;
