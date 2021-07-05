const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  author: {
    type: String,
    required: true
  }, 
  title: {
    type: String, 
    required: true
  },
  genre: {
    type: String, 
  },
  imageUrl: {
    type: String, 
  },
  synopsis: {
    type: String
  }  
});

module.exports = mongoose.model('Book', schema);
