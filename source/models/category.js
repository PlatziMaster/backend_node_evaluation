const mongoose = require("mongoose");
const schema = mongoose.Schema;


const categorySchema = new schema({
    name: String,
    categoryID: Number
});


module.exports = mongoose.model("categories", categorySchema);