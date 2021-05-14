const Product = require('../models/product')
const ProductsRepository = require('../repositories/products-repository')

const ProductsController = {
    async index (request, response) {
        try {
            const products = await ProductsRepository.all()

            return response.send({
                data: products,
            })
        } catch (error) {
            console.log(error)

            return response
                .status(404)
                .send({ message: 'Entity not found.' })
        }
    },
    async store (request, response) {
        let product = new Product({
            name: request.body.name,
            price: request.body.price,
            description: request.body.description,
            categoryId: request.body.categoryId,
            image: request.body.image,
        })

        try {
            product = await ProductsRepository.createOrUpdate(product)

            return response.status(201).send({
                data: product
            })
        } catch (error) {
            console.log(error)

            return response.status(422).send({
                message: 'Unprocessable entity.'
            })
        }
    },
    async show (request, response) {
        try {
            const product = await ProductsRepository.find(request.params.id)

            if (!product) {
                return response.status(404).send({
                    message: 'Entity not found.'
                })
            }

            return response.send({
                data: product
            })
        } catch (error) {
            console.log(error)

            return response.status(404).send({
                message: 'Entity not found.'
            })
        }
    },
    async update (request, response) {
        try {
            let product = await ProductsRepository.find(request.params.id)

            if (!product) {
                return response.status(404).send({
                    message: 'Entity not found.'
                })
            }

            product.name = request.body.name
            product.price = request.body.price
            product.description = request.body.description
            product.categoryId = request.body.categoryId
            product.image = request.body.image

            product = await ProductsRepository.createOrUpdate(product)

            return response.send({
                data: product
            })
        } catch (error) {
            console.log(error)

            return response.status(404).send({
                message: 'Entity not found.'
            })
        }
    },
    async delete (request, response) {
        try {
            const product = await ProductsRepository.find(request.params.id)

            if (!product) {
                return response.status(404).send({
                    message: 'Entity not found.'
                })
            }

            await product.delete()

            return response.send({
                data: product
            })
        } catch (error) {
            console.log(error)

            return response.status(404).send({
                message: 'Entity not found.'
            })
        }
    },
}

module.exports = ProductsController