const mongoose = require('mongoose');

const Product = mongoose.model('Product', {
    name: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        minlength: 1,
        trim: true
    },
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
    },
    image: {
        type: String,
        trim: true
    },
});

module.exports = {Product};