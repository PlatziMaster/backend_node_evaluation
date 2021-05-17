const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mySchema = new Schema({
    name: String,
    price: Number,
    description: String,
    categoryId: String,
    image: String,
});

const model = mongoose.model('products', mySchema);
module.exports = model;