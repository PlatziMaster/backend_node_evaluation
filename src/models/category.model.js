const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
    name:{
        type: String,
        required: true
    },
    image:{
        type: String,
        required: true
    }
});

const Category = mongoose.model('category', CategorySchema);
module.exports = Category;