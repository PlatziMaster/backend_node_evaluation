const MongoLib = require("../mongo");

class CategoryService {
  constructor() {
    this.collection = "categories";
    this.mongoDB = new MongoLib();
  }

  async getCategories() {
    const categories = await this.mongoDB.getAll(this.collection);
    return categories || [];
  }

  async getCategory({ categoryId }) {
    const category = await this.mongoDB.get(this.collection, categoryId);
    return category || [];
  }

  async createCategory({ category }) {
    const createCategoryId = await this.mongoDB.create(this.collection, category);
    return createCategoryId;
  }

  async updateCategory({ categoryId, category } = {}) {
    const updateCategoryId = await this.mongoDB.update(
      this.collection,
      categoryId,
      category
    );
    return updateCategoryId;
  }

  async deleteCategory({ categoryId }) {
    const deleteCategoryId = await this.mongoDB.delete(
      this.collection,
      categoryId
    );
    return deleteCategoryId;
  }
}

module.exports = CategoryService;
