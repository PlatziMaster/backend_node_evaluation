const mongoose = require("mongoose");

const NoteSchema = mongoose.Schema(
  {
    title: String,
    content: String
  },
  {
    timestamps: false
  }
);

module.exports = mongoose.model("Note", NoteSchema);
