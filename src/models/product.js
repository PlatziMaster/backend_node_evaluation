const { ObjectID } = require("bson")
const mongoose = require("mongoose")
const Schema = mongoose.Schema

const ProductSchema = new Schema({
    name: String,
    description: String,
    price: Number,
    categoryId: ObjectID,
    image: String,
},  { collection: 'products'} )

module.exports = mongoose.model("Product", ProductSchema)