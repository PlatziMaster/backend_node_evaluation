const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const product = new Schema({
    name: String,
    price: Number,
    description: String,
    categoryId: String,
    image: String
});

const modelProduct = mongoose.model('Product', product);
module.exports = modelProduct;