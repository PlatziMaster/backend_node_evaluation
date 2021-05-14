const Product = require('../models/product')

const ProductsController = {
    index: function (request, response) {
        Product.find(function(error, products) {
            if (error) {
                console.log(error)
                return response
                    .status(404)
                    .send({ message: 'Unable to retrieve products.' })
            }

            return response.send({
                data: products,
            })
        })
    },
    store: function (request, response) {
        const product = new Product({
            name: request.body.name,
            price: request.body.price,
            description: request.body.description,
            categoryId: request.body.categoryId,
            image: request.body.image,
        })

        product.save(function(error, product) {
            if (error) {
                console.log(error)
                return response.status(422).send({
                    message: 'Something went wrong.'
                })
            }

            return response.status(201).send({
                data: product
            })
        })
    },
    show: function (request, response) {
        Product.findOne({ _id: request.params.id }, function (error, product) {
            if (error) {
                console.log(error)
                return response.status(404).send({
                    message: 'Entity not found.'
                })
            }

            return response.send({
                data: product
            })
        })
    },
    update: function (request, response) {
        Product.findOne({ _id: request.params.id }, function (error, product) {
            if (error) {
                console.log(error)
                return response.status(404).send({
                    message: 'Entity not found.'
                })
            }

            product.name = request.body.name
            product.price = request.body.price
            product.description = request.body.description
            product.categoryId = request.body.categoryId
            product.image = request.body.image

            product.save(function(savingError, product) {
                if (savingError) {
                    console.log(savingError)
                    return response.status(422).send({
                        message: 'Unprocessable entity.'
                    })
                }

                return response.send({
                    data: product
                })
            })
        })
    },
    delete: function (request, response) {
        Product.findOne({ _id: request.params.id }, function (error, product) {
            if (error) {
                console.log(error)
                return response.status(404).send({
                    message: 'Entity not found.'
                })
            }

            product.delete(function(savingError, product) {
                if (savingError) {
                    console.log(savingError)
                    return response.status(422).send({
                        message: 'Unprocessable entity.'
                    })
                }

                return response.send({
                    data: product
                })
            })
        })
    },
}

module.exports = ProductsController