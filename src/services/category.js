const db = require('../integration/db/categoryDB')()

const CategoryService = {
    /**
     * Gets profile detail
     * @param {Object} product - profile identification number
     */
    postCategory: (product) => db.postCategory(product),


    getAll: () => db.getAllCategories(),

    getById: (categoryId) => db.getCategoryById(categoryId),

    putCategory: (categoryId, fieldsToUpdate) => {

        let updateDoc = { $set: {} };
        for(const field in fieldsToUpdate){
            updateDoc.$set[field] = fieldsToUpdate[field]
        }

        return db.putCategory(categoryId, updateDoc)
    },

    deleteById: (categoryId) => db.deleteCategoryById(categoryId),

    getCategoryProductsById: (categoryId) => db.getCategoryProductsById(categoryId)

}
module.exports = CategoryService
