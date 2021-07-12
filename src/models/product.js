const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: String,
    price: Number,
    description: String,
    categoryId: Number
});

module.exports =  mongoose.model('product', productSchema);