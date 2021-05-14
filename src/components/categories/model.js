const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const category = new Schema({
    name: String,
    image: String
});

const modelCategory = mongoose.model('Category', category);
module.exports = modelCategory;