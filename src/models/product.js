const { MongoNetworkError } = require("mongodb")
const mongoose = require("mongoose")
const Schema = mongoose.Schema

const ProductSchema = Schema({
    name: String,
    description: String,
    price: Number,
    categoryId: Number,
})

module.exports = mongoose.model("Product", ProductSchema)