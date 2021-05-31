//importamos mongoose
const mongoose = require('mongoose');
//schema
const Schema = mongoose.Schema;
//schema categoria
const categorySchema = new Schema({
    name:String,
    image:String
},{versionKey:false});

module.exports = mongoose.model('category',categorySchema);