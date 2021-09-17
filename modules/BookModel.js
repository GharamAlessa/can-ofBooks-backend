const mongoose = require('mongoose')

const Book = new mongoose.Schema({
    title: String,
    description: String,
    status: String,
    email: String,
  });
  
  const bookModel = mongoose.model("book", Book);

  module.exports = bookModel