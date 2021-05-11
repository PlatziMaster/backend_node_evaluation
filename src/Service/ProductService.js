const  MongoConnection = require('../DataBase/Connection');
const ObjectId = require('mongodb')

class ProductService {
    constructor() {
        this.collection = 'product';
        this.connection = new MongoConnection();
    }

    async getProducts( category ) {
        const query = category && { category: { $in: category } };
        const products = await this.connection.getAll(this.collection, query);
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
        return updatedProductId;
    }

    async deleteProduct(productId) {
        const deletedProductId = await this.connection.delete(this.collection, productId);
        return deletedProductId;
    }
}

module.exports = ProductService;