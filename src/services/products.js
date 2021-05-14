
const MongoLib = require('../lib/mongo');

class ProductService{

    constructor(){
        this.collection = 'products';
        this.mongoDB = new MongoLib();
    }
    async getProducts(categories){
        const query = categories && { categories: {$in : categories}};
        const products = await this.mongoDB.getAll(this.collection,query);
        return products || [];
    }

    async getProduct(productId){
        const product = await this.mongoDB.get(this.collection,productId);
        return product || {};
    }

    async createProduct(product){
        const createProduct = await this.mongoDB.create(this.collection,product);
        return createProduct;
    }

    async updateProduct(productId,product){
        const updateProduct = await this.mongoDB.update(this.collection,productId,product);
        return updateProduct;
    }
    async deleteProduct(productId){
        const deleteProduct = await this.mongoDB.delete(this.collection,productId);
        return deleteProduct;
    }


}

module.exports = ProductService;