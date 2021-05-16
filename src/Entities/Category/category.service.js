const MongoLib = require("../../lib/mongo");
class CategoryService {
  constructor() {
    this.collection = "categories";
    this.mongoDB = new MongoLib();
  }
  async getAll({ tags }) {
    const query = tags && { tags: { $in: tags } };
    const categories = await this.mongoDB.getAll(this.collection, query);
    return categories || [];
  }
  async getById({ id }) {
    const category = await this.mongoDB.get(this.collection, id);
    return category || {};
  }
  async createCategory({ category }) {
    console.log({ category });
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
}
module.exports = CategoryService;
