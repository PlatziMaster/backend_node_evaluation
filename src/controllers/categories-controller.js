const Category = require('../models/category')

const CategoriesController = {
    index: function (request, response) {
        Category.find(function(error, categories) {
            if (error) {
                console.log(error)
                return response
                    .status(404)
                    .send({ message: 'Unable to retrieve categories.' })
            }

            return response.send({
                data: categories,
            })
        })
    },
    store: function (request, response) {
        const category = new Category({
            name: request.body.name,
            image: request.body.image,
        })

        category.save(function(error, category) {
            if (error) {
                console.log(error)
                return response.status(422).send({
                    message: 'Something went wrong.'
                })
            }

            return response.status(201).send({
                data: category
            })
        })
    },
    show: function (request, response) {},
    update: function (request, response) {},
    delete: function (request, response) {},
}

module.exports = CategoriesController