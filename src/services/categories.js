//const { productsMock } = require('../../utils/mocks/products.js')
const MongoLib = require('../lib/mongo.js');

class CategoryService{

    constructor() {
        this.collection = "categories";
        this.mongoDB = new MongoLib();
    }

    async getCategories(){
        const query = { name: true, image: true }
        const categories = await this.mongoDB.getAll(this.collection, query);
        return categories || [];
    }

    async getCategory({ id }){
        const query = { name: true, image: true }
        const category = await this.mongoDB.get(this.collection, id, query);
        return category || {};
    }

    async createCategory({ category }){
        const categories = await this.mongoDB.create(this.collection, category);
        return categories || {};
    }

    async updateCategory({ id, category }){
        const query = { name: true, image: true }
        const categoryUpdated = await this.mongoDB.update(this.collection, id, category, query);
        return categoryUpdated || {};
    }

    async deleteCategory({id}){
        const categoryDeleted = await this.mongoDB.delete(this.collection, id);
        return categoryDeleted? true: false;
    }

    async getProductsbyCategory({id}){
        this.collection = "products";
        const query = { name: true, price: true }
        const products = await this.mongoDB.getSome(this.collection, id, query);
        return products || [];
    }

}

module.exports = CategoryService