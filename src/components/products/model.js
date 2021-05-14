const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const product = new Schema({
    name: {type: String, required: true},
    price: {type: Number, required: true},
    description: {type: String, required: true},
    categoryId: {type: String, required: true},
    image: {type: String, required: true}
});

const modelProduct = mongoose.model('Product', product);
module.exports = modelProduct;