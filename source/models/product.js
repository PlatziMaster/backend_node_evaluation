const mongoose = require("mongoose");
const schema = mongoose.Schema;


const productSchema = new schema({
    categoryID: Number,
    name: String,
    price: Number,
    description: String,
});

module.exports = mongoose.model("products", productSchema);