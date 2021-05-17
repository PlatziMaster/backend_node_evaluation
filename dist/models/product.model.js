"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var mongoose = require("mongoose");

var Schema = require("mongoose.Schema");

var productsSchema = new Schema({
  name: {
    type: String,
    trim: true
  },
  price: {
    type: Number,
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  categoryId: {
    type: String,
    trim: true
  },
  image: {
    type: String,
    trim: true
  }
});

var _default = mongoose.model("products", productsSchema);

exports["default"] = _default;