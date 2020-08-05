const mongoose = require('mongoose');

const { Schema } = mongoose;

const bookSchema = new Schema({
  title: {
    type: String,
  },
  author: {
    type: String,
  },
  genre: {
    type: String,
  },
  read: {
    type: Boolean,
    default: false,
  },
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
