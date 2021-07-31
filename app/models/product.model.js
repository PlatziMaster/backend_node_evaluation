const mongoose = require("mongoose");

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
    image: String
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Product", ProductSchema);
