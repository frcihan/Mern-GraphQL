const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
  },
  author: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
  },
  category: {
    type: String,
  },
  pages: {
    type: Number,
  },
  published: {
    type: Date,
  },
});

module.exports = Book = mongoose.model("book", BookSchema);
