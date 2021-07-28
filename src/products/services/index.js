const MongoLib = require("../../db/mongo");

class ProductsService {
  constructor() {
    this.collection = "products";
    this.mongoDB = new MongoLib();
  }

  async getProducts() {
    const products = await this.mongoDB.getAll(this.collection);
    return products;
  }

  async getProduct(id) {
    const product = await this.mongoDB.get(this.collection, id);
    return product;
  }

  async createProduct(data) {
    const product = await this.mongoDB.create(this.collection, data);
    return product;
  }

  async updateProduct(id, data) {
    const product = await this.mongoDB.update(this.collection, id, data);
    return product;
  }

  async deleteProduct(id) {
    const product = await this.mongoDB.delete(this.collection, id);
    return product;
  }
}

module.exports = ProductsService;
