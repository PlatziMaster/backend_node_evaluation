const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mySchema = new Schema({
    name: String,
    image: String,
});

const model = mongoose.model('categories', mySchema);
module.exports = model;