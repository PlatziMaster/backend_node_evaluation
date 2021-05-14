const { Schema, model } = require('mongoose');

const ProductSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  description: {
    type: String
  },
  image: {
    type: String
  },
  categoryId: {
    type: String
  }
}, {
  timestamps: true
});

module.exports = model('Product', ProductSchema);