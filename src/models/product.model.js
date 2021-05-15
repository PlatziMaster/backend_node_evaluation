import mongoose from 'mongoose'
import Schema from mongoose.Schema

const productsSchema = new Schema({
    name: {
        type: String,
        trim: true,
    },
    price: {
        type: Number,
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    categoryId: {
        type: String,
        trim: true
    },
    image: {
        type: String,
        trim: true
    }
})

export default mongoose.model('products', productsSchema)