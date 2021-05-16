const mongoose = require("mongoose");

/**
 * Product Schema
 * @private
 */
const productsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
    },
    categoryId: {
      ref: "categories",
      type: mongoose.Schema.Types.ObjectId,
    },
    image: {
      type: String,
    },
  },
  {
    versionKey: false,
  }
);

/**
 * @typedef ProductsSchema
 */
module.exports = mongoose.model("products", productsSchema);
