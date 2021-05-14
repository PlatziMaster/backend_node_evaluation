const Category = require('../models/category')

const CategoriesRepository = {
    async all() {
        return await Category.find()
    },
    async find(id) {
        return await Category.findOne({ _id: id })
    },
    async createOrUpdate(category) {
        return await category.save()
    },
    async delete(category) {
        return await category.delete()
    },
}

module.exports = CategoriesRepository