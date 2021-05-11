const  MongoConnection = require('../DataBase/Connection');
const ObjectId = require('mongodb')

class CategoryService {
    constructor() {
        this.collection = 'category';
        this.connection = new MongoConnection();
    }

    async getCategories() {
        const categories = await this.connection.getAll(this.collection, query);
        return categories || [];        
    }

    async getCategory(categoryId) {
        const category = await this.connection.get(this.collection, categoryId);
        return category || {};
    }

    async createCategory(category) {
        const insertedCategoryId = await this.connection.create(this.collection, category);
        return insertedCategoryId;
    }

    async updateCategory(categoryId, category) {
        const updatedProductId = await this.connection.update(this.collection, categoryId, category);
        return updatedProductId;
    }

    async deleteCategory(categoryId) {
        const deletedCategoryId = await this.connection.delete(this.collection, categoryId);
        return deletedCategoryId;
    }

    async getProductsByCategory(categoryId) {
        const products = await this.connection.getAll(this.collection, query);
        return products || [];
    }
}

module.exports = CategoryService;