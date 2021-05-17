const mongoLib = require('../lib/mongo.js');
const {config} = require('../config/index.js');


class ProductService {
    constructor(){
        this.mongoDB = new mongoLib();
    }

    async getProducts(){
        const products = await this.mongoDB.getAll(this.collecition, null);
        return products || [];
    }

    async getProductId(productId){
        const productId = await this.mongoDB.getAll(this.collecition, productId );
        return productId || [];
    }

    async createProduct( product){
        const createdProductId = await this.mongoDB.create(this.collection, product);
        return createdProductId;
    }
    async deleteProduct( productId ){
        const deletedProductId = await this.mongoDB.delete(this.collection, productId);
        return deletedProductId;
    }

    //Categories 

    async getCategories(){
        const categories = await this.mongoDB.getAll(this.collecition, null);
        return categories || [];
    }

    async getCategorieId(categorieId){
        const categorieId = await this.mongoDB.getAll(this.collecition, categorieId );
        return categorieId || [];
    }

    async createCategorie( categorie ){
        const createdCategorieId = await this.mongoDB.create(this.collection, categorieId);
        return createdCategorieId;
    }
    async deleteCategorie( categorieId ){
        const deletedCategorieId = await this.mongoDB.delete(this.collection, CategorieId);
        return deletedCategorieId;
    }

}


module.exports = ProductService;