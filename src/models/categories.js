const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
    createdAt: {type: Date, default: Date.now },
    updatedAt: {type: Date},
    name: {type: String},
    image: {type: String}

});

module.exports = mongoose.model('categories', CategorySchema);