const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ProductShema = Schema({

    title: String,
    price: String,
    description: String,
    categoryId: String,
    image: String
   
    
  });
  
  module.exports = mongoose.model('Product', ProductShema);