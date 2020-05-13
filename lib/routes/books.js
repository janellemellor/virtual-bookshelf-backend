const { Router } = require('express');
const Book = require('../models/Book');

module.exports = Router()
  //get all books
  .post('/', (req, res, next) => {
    Book
      .create(req.body)
      .then(book => res.send(book))
      .catch(next);
  })
  
  //create a new book
