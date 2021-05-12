const mongoose = require('mongoose');

const Category = mongoose.model('Category', {
    name: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    image: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    products: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    }]
});

module.exports = {Category};