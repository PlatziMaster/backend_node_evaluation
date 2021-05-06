const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
  name: String,
  price: Number,
  description: String,
  _categoryId : { type: Schema.Types.ObjectId, ref: 'Category' },
  image: String
});

const  Product = mongoose.model('Product', productSchema);

module.exports = Product