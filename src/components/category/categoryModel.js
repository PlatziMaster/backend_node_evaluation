// Creación del modelo de  nuestra base de datos usando mongoose
const mongoose = require('mongoose');

// Separar de mongoose la clase schema
const Schema = mongoose.Schema;

// Creación de esquema de mongoose para categorias
const CategorySchema = new Schema({
    name: { 
        type:String,
        required: true,
    },
    image: {
        type: String,
        required: true
    }
});

const categoryModel = mongoose.model('Categories', CategorySchema);
module.exports = categoryModel;