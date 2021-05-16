// Creación del modelo de  nuestra base de datos usando mongoose
const mongoose = require('mongoose');

// Separar de mongoose la clase schema
const Schema = mongoose.Schema;

// Creación de esquema de mongoose para categorias
const ProductSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    description: String,
    categoryId: {
        type: Schema.ObjectId,
        ref: 'Categories'    //Nombre del modelo de categorias
    },
    image: String

});

const productModel = mongoose.model('Products', ProductSchema);
module.exports = productModel;