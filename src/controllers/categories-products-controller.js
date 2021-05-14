const Category = require('../models/category')
const Product = require('../models/product')

const CategoriesProductsController = {
    async index (request, response) {
        try {
            const products = await Product.find({ categoryId: request.params.categoryId })

            return response.send(products)
        } catch (error) {
            console.log(error)

            return response.status(404).send({
                message: 'Entity not found'
            })
        }
    }
}

module.exports = CategoriesProductsController