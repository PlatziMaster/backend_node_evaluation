const MongoLib = require("../../lib/mongo");
class CategoryService {
  constructor() {
    this.collection = "categories";
    this.mongoDB = new MongoLib();
  }
  async getAll() {
    const categories = await this.mongoDB.getAll(this.collection);
    return categories || [];
  }
  async getById({ id }) {
    const category = await this.mongoDB.get(this.collection, id);
    return category || {};
  }
  async createCategory({ category }) {
    const createCategoryId = await this.mongoDB.create(
      this.collection,
      category
    );
    return createCategoryId;
  }
  async updateCategory({ id, category }) {
    const updatedCategoryId = await this.mongoDB.update(
      this.collection,
      category,
      id
    );
    return updatedCategoryId;
  }
  async deleteCategory({ id }) {
    const deleteCategoryId = await this.mongoDB.delete(this.collection, id);
    return deleteCategoryId;
  }
  async getProductsByCategory({ id }) {
    const query = { categoryId: id };
    const productsByCategory = await this.mongoDB.getAll("products", query);
    return productsByCategory || [];
  }
}
module.exports = CategoryService;
