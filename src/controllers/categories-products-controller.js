const ProductsRepository = require('../repositories/products-repository')

const CategoriesProductsController = {
    async index (request, response) {
        try {
            const products = await ProductsRepository.all({
                categoryId: request.params.categoryId
            })

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