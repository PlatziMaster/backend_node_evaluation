const mongoose = require('mongoose');
mongoose.Schema = mongoose.Schema;

const productSchema =  new Schema({
    name: String,
    price: Int,
    description: String,
    categoryId: Int
}); 

const categorySchema = new Schema({
    name: String,
});

module.exports =  mongoose.model('product', productSchema);
module.exports =  mongoose.model('category', categorySchema);