const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  authorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Author',
    required: true
  }, 
  title: {
    type: String, 
    required: true
  },
  genre: {
    type: String, 
  },
  url: {
    type: String, 
  },
  synopsis: {
    type: String
  }  
});

module.exports = mongoose.model('Book', schema);
