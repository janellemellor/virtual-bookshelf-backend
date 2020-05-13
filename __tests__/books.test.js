require('dotenv').config();
const connect = require('../lib/utils/connect');
const mongoose = require('mongoose');
const request = require('supertest');
const app = require('../lib/app');
const Book = require('../lib/models/Book');

describe('book routes', () => {
  beforeAll(() => {
    connect();
  });

  beforeEach(() => {
    return mongoose.connection.dropDatabase();
  });

  afterAll(() => {
    return mongoose.connection.close();
  });

  it('creates a book', async() => {
    return request(app)
      .post('/api/v1/books')
      .send({
        author: 'Nayyirah Waheed',
        title: 'Salt',
        genre: 'Poetry',
        imageUrl: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1380105266l/18585282.jpg',
        synopsis: 'It was only and ever love'
      })
      .then(res => {
          expect(res.body).toEqual({
            _id: expect.any(String),
            author: 'Nayyirah Waheed',
            title: 'Salt',
            genre: 'Poetry',
            imageUrl: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1380105266l/18585282.jpg',
            synopsis: 'It was only and ever love',
            __v: 0
          });
      });
  });

});