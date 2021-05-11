const  MongoConnection = require('../DataBase/Connection');
const ObjectId = require('mongodb')

class ProductService {
    constructor() {
        this.collection = 'product';
        this.connection = new MongoConnection();
    }

    async getProducts({ category }) {
        const query = category && { category: { $in: category } };
        const products = await this.connection.getAll(this.collection, query);
        return products || [];        
    }

    async createProduct(product) {
        const insretedProductId = await this.connection.create(this.collection, product);
        return insretedProductId;
    }
}

module.exports = ProductService;