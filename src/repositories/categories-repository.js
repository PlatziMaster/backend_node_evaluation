const Category = require('../models/category')

const CategoriesRepository = {
    async all() {
        return await Category.find()
    },
    async paginate(page = 1, filters = {}, recordsPerPage = 10) {
        return await Category.find(filters)
            .limit(recordsPerPage)
            .skip(recordsPerPage * (page - 1))
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