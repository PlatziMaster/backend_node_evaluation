const  MongoConnection = require('../DataBase/Connection');
const ObjectId = require('mongodb')

class ProductService {
    constructor() {
        this.collection = 'products';
        this.connection = new MongoConnection();
    }

    async getProducts() {
        const products = await this.connection.getAll(this.collection);
        return products || [];        
    }

    async getProduct(productId) {
        const product = await this.connection.get(this.collection, productId);
        return product || {};
    }

    async createProduct(product) {
        const insertedProductId = await this.connection.create(this.collection, product);
        return insertedProductId;
    }

    async updateProduct(productId, product) {
        const updatedProductId = await this.connection.update(this.collection, productId, product);
        //const updatedProduct = await this.connection.getUpdated(this.collection, updatedProductId);
        return updatedProductId;
    }

    async deleteProduct(productId) {
        const wasDeleted = await this.connection.delete(this.collection, productId);
        return wasDeleted;
    }
}

module.exports = ProductService;