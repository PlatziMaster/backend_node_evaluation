const mongoose = require('mongoose');
const {Schema} = mongoose;

const CategorySchema = new Schema({
    name: {type: String},
    image: {type: String}
}, { collection: "category" });

module.exports = mongoose.model('category', CategorySchema);
