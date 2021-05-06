const mongoose = require('mongoose');
const {Schema} = mongoose;

const ProductSchema = new Schema({
    name: {type: String},
    price: {type: String},
    description: {type: String},
    categoryId: {type: String},
    image: {type: String}
}, { collection: "product" });

module.exports = mongoose.model('product', ProductSchema);
