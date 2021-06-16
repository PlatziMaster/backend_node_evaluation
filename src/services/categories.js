const { categoriesMock } = require("../utils/mocks/categories");

const MongoLib = require("../lib/mongo");

class CategoriesService {
  constructor() {
    this.collection = "categories"; //this can be made flexible
    this.mongoDB = new MongoLib();
  }

  async getCategories({name}) {
    const query = name && { name: {$in:name}}
    const categories = await this.mongoDB.getAll(this.collection, query);
    return categories || [];
  }

  async getCategory({ categoryId }) {
    //const category = await Promise.resolve(categoriesMock[0]);

    const category = await this.mongoDB.get(this.collection, categoryId);

    return category || [];
  }

  async createCategory({ category }) {
    //const createdMovieId = await Promise.resolve(categoriesMock[0].categoryId);

    const createdCategoryId = await this.mongoDB.create(this.collection, category);
    console.log("creando categoria")
    return createdCategoryId || [];
  }

  async updateCategory({ categoryId, category } = {}) {
    // const updatedCategory = await Promise.resolve(categoriesMock[0].categoryId);
    const updatedCategory = await this.mongoDB.update(
      this.collection,
      categoryId,
      category
    );
    return updatedCategory || [];
  }

  async deleteCategory({ categoryId }) {
    //const deletedCategory = await Promise.resolve(categoriesMock[0].categoryId);
    const deletedCategory = await this.mongoDB.delete(
      this.collection,
      categoryId
    );
    return deletedCategory || [];
  }
}

module.exports = CategoriesService;
