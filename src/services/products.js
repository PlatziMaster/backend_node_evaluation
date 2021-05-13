const MongoLib = require("../lib/mongo");

class Products {
    constructor() {
        this.collection = "products";
        this.mongoDB = new MongoLib();
    }

    async all() {
        return (await this.mongoDB.getAll(this.collection)) || [];
    }

    async find(productId) {
        return await this.mongoDB.get(this.collection, productId);
    }

    async create({ product }) {
        return await this.mongoDB.create(this.collection, product);
    }

    async update({ productId, product } = {}) {
        return await this.mongoDB.update(this.collection, productId, product);
    }

    async destroy(productId) {
        await this.mongoDB.delete(this.collection, productId);
    }
}

module.exports = Products;
