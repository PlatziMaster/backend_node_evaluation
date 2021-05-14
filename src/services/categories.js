
const MongoLib = require('../lib/mongo');

class CategoriesService{

    constructor(){
        this.collection = 'categories';
        this.mongoDB = new MongoLib();
    }
    async getCategories(categories){
        const query = categories && { categories: {$in : categories}};
        const Categories = await this.mongoDB.getAll(this.collection,query);
        return Categories || [];
    }

    async getCategory(CategoryId){
        const Category = await this.mongoDB.get(this.collection,CategoryId);
        return Category || {};
    }
    async getProducts(categoryId){
        const query = categoryId && { "categoryId": categoryId };
        const Category = await this.mongoDB.getAll("products",query);
        return Category || {};
    }
    

    async createCategory(Category){
        const createCategory = await this.mongoDB.create(this.collection,Category);
        return createCategory;
    }

    async updateCategory(CategoryId,Category){
        const updateCategory = await this.mongoDB.update(this.collection,CategoryId,Category);
        return updateCategory;
    }
    async deleteCategory(CategoryId){
        const deleteCategory = await this.mongoDB.delete(this.collection,CategoryId);
        return deleteCategory;
    }


}

module.exports = CategoriesService;