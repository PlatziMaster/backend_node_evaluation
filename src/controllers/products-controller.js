const Product = require('../models/product')

const ProductsController = {
    async index (request, response) {
        try {
            const products = await Product.find()

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
            product = await product.save()

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
            const product = await Product.findOne({ _id: request.params.id })

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
            let product = await Product.findOne({ _id: request.params.id })

            product.name = request.body.name
            product.price = request.body.price
            product.description = request.body.description
            product.categoryId = request.body.categoryId
            product.image = request.body.image

            product = await product.save()

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
            const product = await Product.findOne({ _id: request.params.id })

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