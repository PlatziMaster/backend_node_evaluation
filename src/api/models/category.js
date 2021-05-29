const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mySquema = new Schema({
    name: String,
    image: String,
});

const model = mongoose.model('category', mySquema);
module.exports = model;