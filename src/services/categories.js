const MongoLib = require("../lib/mongo");

class Categories {
    constructor() {
        this.collection = "categories";
        this.mongoDB = new MongoLib();
    }

    async all() {
        return (await this.mongoDB.getAll(this.collection)) || [];
    }

    async find(categoryId) {
        return await this.mongoDB.get(this.collection, categoryId);
    }

    async create({ category }) {
        const insertedDocument = await this.mongoDB.create(
            this.collection,
            category
        );
        return insertedDocument.ops[0];
    }

    async update({ categoryId, category } = {}) {
        const updatedDocument = await this.mongoDB.update(
            this.collection,
            categoryId,
            category
        );
        return updatedDocument.value;
    }

    async destroy(categoryId) {
        await this.mongoDB.delete(this.collection, categoryId);
    }
}

module.exports = Categories;
