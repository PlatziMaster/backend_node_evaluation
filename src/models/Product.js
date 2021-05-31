//importamos mongoose
const mongoose = require('mongoose');
//schema
const Schema = mongoose.Schema;
//schema producto
const productSchema = new Schema({
    name:String,
    price:String,
    description:String,
    categoryId:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'category'
    },
    image:String
},{versionKey:false});

module.exports = mongoose.model('product',productSchema);