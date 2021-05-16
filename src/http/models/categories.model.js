const mongoose = require("mongoose");

/**
 * Category Schema
 * @private
 */
const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

/**
 * @typedef CategorySchema
 */
module.exports = mongoose.model("categories", categorySchema);
