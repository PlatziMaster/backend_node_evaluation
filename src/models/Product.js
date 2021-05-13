const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    ProductId: Number,
    name: String,
    price: Number,
    description: String,
    categoryId: Number,
    //image: String,
});

module.exports =  mongoose.model('product', productSchema);