const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new Schema({
    categoryId: Number,
    name: String,
    //image: String,
});

module.exports =  mongoose.model('category', categorySchema);