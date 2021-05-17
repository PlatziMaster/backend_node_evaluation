const MongoLib = require("../mongo");

class ProductService {
  constructor() {
    this.collection = "products";
    this.mongoDB = new MongoLib();
  }

  async getProducts() {
    const products = await this.mongoDB.getAll(this.collection);
    return products || [];
  }

  async getProduct({ productId }) {
    const product = await this.mongoDB.get(this.collection, productId);
    return product || [];
  }

  async createProduct({ product }) {
    const createProductId = await this.mongoDB.create(this.collection, product);
    return createProductId;
  }

  async updateProduct({ productId, product } = {}) {
    const updateProductId = await this.mongoDB.update(
      this.collection,
      productId,
      product
    );
    return updateProductId;
  }

  async deleteProduct({ productId }) {
    const deleteProductId = await this.mongoDB.delete(
      this.collection,
      productId
    );
    return deleteProductId;
  }
}

module.exports = ProductService;
