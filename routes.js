const express = require('express');
const router = express.Router();
const bookController = require('./control');
const validateBook = require('./validation');  // import validation middleware

// define routes
router.post('/books', validateBook, bookController.createBook);
router.get('/books', bookController.getAllBooks);
router.get('/books/:id', bookController.getBookById);
router.put('/books/:id', validateBook, bookController.updateBookById);
router.delete('/books/:id', bookController.deleteBookById);

module.exports = router;