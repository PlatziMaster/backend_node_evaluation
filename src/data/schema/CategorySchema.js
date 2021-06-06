const mongoose = require('mongoose')
const { Schema, model } = mongoose

const CategoryModel = new Schema({
    name:   String,
    image:  String
},
{
    versionKey: false
})

module.exports = model('Category', CategoryModel)