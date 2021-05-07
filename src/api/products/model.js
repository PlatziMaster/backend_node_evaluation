const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Product = new Schema({
    name: {type: String, required: true},
    price: {type: Number, required: true},
    description: {type: String, required: true},
    categoryId: [{type: Schema.ObjectId, ref: 'Category', required: true}],
    image: String
});

const model_product = mongoose.model('Product', Product);
module.exports = model_product;
