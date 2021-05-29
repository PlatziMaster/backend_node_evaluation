const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mySquema = new Schema({
    name: String,
    price: Number,
    description: String,
    categoryId: Number,
    image: String,
});

const model = mongoose.model('products', mySquema);
module.exports = model;