const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const Category = new Schema({
    name: {type: String, required: true},
    image: String,
})


// const Product = new Schema({
//     name: {type: String, required: true},
//     price: {type: Number, required: true},
//     description: {type: String, required: true},
//     categoryId: {type: Category.ObjectId, required: true},
//     image: String
// })

// const model_product = mongoose.model('Product', Product);
const model_category = mongoose.model('Category', Category);

module.exports = model_category

