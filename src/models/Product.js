const { Schema, model } = require('mongoose')

const ProductSchema = new Schema({
    name: {type: String,required: true},
    price: {type: String, required: true},
    description: {type: String},
    categoryId: {type: String,required: true},
    image: {type: String,}   
}, {
    timestamps: true
})

module.exports = model('Product', ProductSchema)