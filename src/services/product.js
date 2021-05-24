const db = require('../integration/db/productDB')()

const ProductService = {
    /**
     * Gets profile detail
     * @param {Object} product - profile identification number
     */
    postProduct: (product) => db.postProduct(product),


    getAll: () => db.getAllProducts(),

    getById: (productId) => db.getProductById(productId),

    putProduct: (productId, fieldsToUpdate) => {

        let updateDoc = { $set: {} };
        for(const field in fieldsToUpdate){
            updateDoc.$set[field] = fieldsToUpdate[field]
        }

        return db.putProduct(productId, updateDoc)
    },

    deleteById: (productId) => db.deleteProductById(productId),

}
module.exports = ProductService
