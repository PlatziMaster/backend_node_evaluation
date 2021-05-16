const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date },
    name: {type: String},
    price: {type: String},
    description: {type: String},
    categoryid: {type: String},
    image: {type: String}

});

module.exports = mongoose.model('product', ProductSchema);