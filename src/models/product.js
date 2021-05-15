const mongoose = require("mongoose")
const Schema = mongoose.Schema

const ProductSchema = Schema({
    name: String,
    description: String,
    price: Number,
    categoryId: String,
    image: String,
})

module.exports = mongoose.model("Product", ProductSchema)