//const { productsMock } = require('../../utils/mocks/products.js')
const MongoLib = require('../lib/mongo.js');

class ProductService{

    constructor() {
        this.collection = "products";
        this.mongoDB = new MongoLib();
    }

    async getProducts(){
        const query = { name: true, price: true, categoryId: true }
        const products = await this.mongoDB.getAll(this.collection, query);
        return products || [];
    }

    async getProduct({ id }){
        const query = { name: true, price: true, categoryId: true }
        const product = await this.mongoDB.get(this.collection, id, query);
        return product || {};
    }

    async createProduct({ product }){
        const products = await this.mongoDB.create(this.collection, product);
        return products || {};
    }

    async updateProduct({ id, product }){
        const query = { name: true, price: true, categoryId: true }
        const productUpdated = await this.mongoDB.update(this.collection, id, product, query);
        return productUpdated || {};
    }

    async deleteProduct({id}){
        const productDeleted = await this.mongoDB.delete(this.collection, id);
        return productDeleted? true: false;
    }

}

module.exports = ProductService