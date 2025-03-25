const mongoose = require('mongoose');

// create book schema
const bookSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
    },
    publishedYear: {
        type: Number,
        required: true,
    },
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;