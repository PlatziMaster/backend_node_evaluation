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
    store: function (request, response) {},
    show: function (request, response) {},
    update: function (request, response) {},
    delete: function (request, response) {},
}

module.exports = CategoriesController