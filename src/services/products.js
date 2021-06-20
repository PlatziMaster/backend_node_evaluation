const MongoLib = require("../lib/mongo");

class ProductsService {
  constructor() {
    this.collection = "products"; //this can be made flexible
    this.mongoDB = new MongoLib();
  }

  async getProducts({ name }) {
    const query = name && { name: { $in: name } };
    const products = await this.mongoDB.getAll(this.collection, query);
    return products || [];
  }

  async getProduct({ productId }) {
    //const product = await Promise.resolve(productsMock[0]);

    const product = await this.mongoDB.get(this.collection, productId);

    return product || [];
  }

  async createProduct({ product }) {
    //const createdMovieId = await Promise.resolve(productsMock[0].productId);
    const createdProductId = await this.mongoDB.create(
      this.collection,
      product
    );
    return createdProductId || [];
  }

  async updateProduct({ productId, product } = {}) {
    // const updatedProduct = await Promise.resolve(productsMock[0].productId);
    const updatedProduct = await this.mongoDB.update(
      this.collection,
      productId,
      product
    );
    return updatedProduct || [];
  }

  async deleteProduct({ productId }) {
    //const deletedProduct = await Promise.resolve(productsMock[0].productId);
    const deletedProduct = await this.mongoDB.delete(
      this.collection,
      productId
    );
    return deletedProduct || [];
  }
}

module.exports = ProductsService;
