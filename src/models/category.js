const mongoose = require('mongoose')

const Category = mongoose.model(
    'Category',
    {
        name: String,
        image: String,
    }
)

module.exports = Category