const mongoose = require("mongoose");

// Model for categories

const CategorySchema = mongoose.Schema({
  name: String,
  image: String
});

module.exports = mongoose.model("Category", CategorySchema);
