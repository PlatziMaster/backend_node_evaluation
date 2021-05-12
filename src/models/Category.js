const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const Category = Schema({
    name: String,
    image:String   
    
  });
  
  module.exports = mongoose.model('category', Category);