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
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  categoryId: {
    type: Schema.Types.ObjectId,
    ref: 'Category'
  }
}, {
  timestamps: true
});

module.exports = model('Product', ProductSchema);