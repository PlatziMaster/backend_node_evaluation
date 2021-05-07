const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Category = new Schema({
    name: {type: String, required: true},
    image: String,
});

const model_category = mongoose.model('Category', Category);
module.exports = model_category;

