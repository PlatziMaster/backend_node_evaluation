const mongoose = require("mongoose")
const Schema = mongoose.Schema

const CategorySchema = new Schema({
    name: String,
    image: String,
}, { collection: 'categories' })

module.exports = mongoose.model("Category", CategorySchema)