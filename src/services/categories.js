const { categoriesMock } = require('../utils/mocks/categories');

class CategoriesService {
    async getCategories(){
        const categories = await Promise.resolve(categoriesMock);
        return categories || [];
    };

    async getCategory(){
        const category = await Promise.resolve(categoriesMock[0]);
        return category || [];
    };

    async createCategory(){
        const createdMovieId = await Promise.resolve(categoriesMock[0].categoryId);
        return createdMovieId || [];
    };

    async updateCategory(){
        const updatedCategory = await Promise.resolve(categoriesMock[0].categoryId);
        return updatedCategory || [];
    };

    async deleteCategory(){
        const deletedCategory = await Promise.resolve(categoriesMock[0].categoryId);
        return deletedCategory || [];
    }
};

module.exports = CategoriesService;