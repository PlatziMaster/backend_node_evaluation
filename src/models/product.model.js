const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    description: String,
    categoryId: String,
    image: String
});

const Product = mongoose.model('product', ProductSchema);
module.exports = Product;