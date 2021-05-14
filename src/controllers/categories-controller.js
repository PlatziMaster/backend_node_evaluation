const Category = require('../models/category')

const CategoriesController = {
    async index (request, response) {
        try {
            const categories = await Category.find()

            return response.send({
                data: categories,
            })
        } catch (error) {
            console.log(error)

            return response
                .status(404)
                .send({ message: 'Entity not found.' })
        }
    },
    async store (request, response) {
        let category = new Category({
            name: request.body.name,
            image: request.body.image,
        })

        try {
            category = await category.save()

            return response.status(201).send({
                data: category
            })
        } catch (error) {
            console.log(error)

            return response.status(422).send({
                message: 'Something went wrong.'
            })
        }
    },
    async show (request, response) {
        try {
            const category = await Category.findOne({ _id: request.params.id })

            return response.send({
                data: category
            })
        } catch (e) {
            return response.status(404).send({
                message: 'Entity not found.'
            })
        }
    },
    async update (request, response) {
        try {
            let category = await Category.findOne({ _id: request.params.id })

            category.name = request.body.name
            category.image = request.body.image

            category = await category.save()

            return response.send({
                data: category
            })
        } catch (e) {
            return response.status(422).send({
                message: 'Unprocessable entity.'
            })
        }
    },
    async delete (request, response) {
        try {
            const category = await Category.findOne({ _id: request.params.id })
            await category.delete()

            return response.send({
                data: category
            })
        } catch (e) {
            return response.status(422).send({
                message: 'Unprocessable entity.'
            })
        }
    },
}

module.exports = CategoriesController