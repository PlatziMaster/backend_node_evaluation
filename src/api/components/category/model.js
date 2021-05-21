const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Category = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    image: { data: Buffer, contentType: String }
  },
  {
    versionKey: false
  }
);

const CategoryModel = mongoose.model("Category", Category);

module.exports = CategoryModel;
