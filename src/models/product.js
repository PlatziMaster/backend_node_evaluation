const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: String,
    price: Number,
    description: String,
    categoryId: Number
}) 

const categorySchema = new Schema({
    name: String,
});

module.exports =  mongoose.model('product', productSchema);
module.exports =  mongoose.model('category', categorySchema);