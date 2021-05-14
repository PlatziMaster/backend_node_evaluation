const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Category = new Schema({
    name: {type: String, required: true},
    image: {type: String, required: true}
});

const modelCategory = mongoose.model('Category', Category);
module.exports = modelCategory;