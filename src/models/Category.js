const { Schema, model } = require('mongoose')

const CategorySchema = new Schema({
    name: {type: String, required: true, unique: true},
    image: {type: String,}   
}, {
    timestamps: true
})

module.exports = model('Category', CategorySchema)