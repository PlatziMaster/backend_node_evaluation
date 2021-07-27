const mongoose = require("mongoose");

// Model for categories

const CategorySchema = mongoose.Schema({
  name: String,
  image: Object
});

module.exports = mongoose.model("Category", CategorySchema);

// Model for products

const ProductSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: false
    },
    price: {
      type: Number
    },
    description: String,
    categoryId: [{ type: mongoose.Schema.Types.ObjectId, ref: "Category" }],
    image: Object
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Product", ProductSchema);
