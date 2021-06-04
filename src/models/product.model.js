const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    name: String,
    price: Number,
    description: String,
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category"
    },
    image: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Product', ProductSchema);