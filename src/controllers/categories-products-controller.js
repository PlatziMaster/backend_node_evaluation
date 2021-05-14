const Category = require('../models/category')
const Product = require('../models/product')

const CategoriesProductsController = {
    index: function (request, response) {
        Product.find({ categoryId: request.params.categoryId }, function (error, products) {
            if (error) {
                return response.status(404).send({
                    message: 'Entity not found'
                })
            }

            return response.send(products)
        })
    }
}

module.exports = CategoriesProductsController