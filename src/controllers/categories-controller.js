const Category = require('../models/category')
const CategoryRepository = require('../repositories/categories-repository')

const CategoriesController = {
    async index (request, response) {
        try {
            const categories = await CategoryRepository.all()

            return response.send({
                data: categories
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
            category = await CategoryRepository.createOrUpdate(category)

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
            const category = await CategoryRepository.find(request.params.id)

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
            let category = await CategoryRepository.find(request.params.id)

            if (!category) {
                return response.status(404).send({
                    message: 'Entity not found.'
                })
            }

            category.name = request.body.name
            category.image = request.body.image

            category = await CategoryRepository.createOrUpdate(category)

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
            const category = await CategoryRepository.find(request.params.id)

            if (!category) {
                return response.status(404).send({
                    message: 'Entity not found.'
                })
            }

            await CategoryRepository.delete(category)

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