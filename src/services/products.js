const MongoLib = require("../lib/mongo");

class Products {
    constructor() {
        this.collection = "products";
        this.mongoDB = new MongoLib();
    }

    async all(categoryId = null) {
        const query = categoryId && { categoryId: { $in: [categoryId] } };
        const data = await this.mongoDB.getAll(this.collection, query);
        return data || [];
    }

    async find(productId) {
        return await this.mongoDB.get(this.collection, productId);
    }

    async create({ product }) {
        const insertedDocument = await this.mongoDB.create(
            this.collection,
            product
        );
        return insertedDocument.ops[0];
    }

    async update({ productId, product } = {}) {
        const updatedDocument = await this.mongoDB.update(
            this.collection,
            productId,
            product
        );
        return updatedDocument.value;
    }

    async destroy(productId) {
        await this.mongoDB.delete(this.collection, productId);
    }
}

module.exports = Products;
