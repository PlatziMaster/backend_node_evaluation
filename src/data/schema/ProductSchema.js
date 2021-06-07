const mongoose = require('mongoose')
const { Schema, model } = mongoose

const ProductModel = new Schema({
    name:           String,
    price:          Number,
    description:    String,
    image:          String,
    categoryId: {
        type:       Schema.Types.ObjectId,
        ref:        'Category'
    }
}, {
    versionKey: false
})

module.exports = model('Product', ProductModel)