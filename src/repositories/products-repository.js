const Product = require('../models/product')

const ProductsRepository = {
    async all() {
        return await Product.find()
    },
    async find(id) {
        return await Product.findOne({ _id: id })
    },
    async createOrUpdate(product) {
        return await product.save()
    },
    async delete(product) {
        return await product.delete()
    },
}

module.exports = ProductsRepository