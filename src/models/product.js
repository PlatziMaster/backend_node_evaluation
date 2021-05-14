const mongoose = require('mongoose')

const Product = mongoose.model(
    'Product',
    {
        name: String,
        price: Number,
        description: String,
        categoryId: String,
        image: String,
    }
)

module.exports = Product