import mongoose, { Schema }  from 'mongoose'

const categoriesSchema = new Schema({
    name: {
        type: String,
        trim: true,
    },
    image: {
        type: String,
        trim: true
    }
})

export default mongoose.model('categories', categoriesSchema)