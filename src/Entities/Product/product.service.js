const MongoLib = require("../../lib/mongo");

class ProductService {
  constructor() {
    this.collection = "product";
    this.mongoDB = new MongoLib();
  }
  async getAll({ tags }) {
    const query = tags && { tags: { $in: tags } };
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
  async updateProduct({ productId, product }) {
    const updatedProductId = await this.mongoDB.update(
      this.collection,
      product,
      productId
    );
    return updatedProductId;
  }
  async deleteProduct({ id }) {
    const deleteProductId = await this.mongoDB.delete(this.collection, id);
    return deleteProductId;
  }
}
module.exports = ProductService;
