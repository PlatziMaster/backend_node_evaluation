const MongoLib = require("../../db/mongo");

class CategoriesService {
  constructor() {
    this.collection = "categories";
    this.productCollection = "products";
    this.mongoDB = new MongoLib();
  }

  async getCategories() {
    const categories = await this.mongoDB.getAll(this.collection);
    return categories;
  }

  async getCategory(id) {
    const category = await this.mongoDB.get(this.collection, id);
    return category;
  }

  async getProductsFromACategory(id) {
    const products = await this.mongoDB.getAll(this.productCollection, {
      categoryId: id,
    });
    return products;
  }

  async createCategory(data) {
    const category = await this.mongoDB.create(this.collection, data);
    return category;
  }

  async updateCategory(id, data) {
    const category = await this.mongoDB.update(this.collection, id, data);
    return category;
  }

  async deleteCategory(id) {
    const category = await this.mongoDB.delete(this.collection, id);
    return category;
  }
}

module.exports = CategoriesService;
