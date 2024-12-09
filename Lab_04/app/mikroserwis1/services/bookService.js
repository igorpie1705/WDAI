const Book = require("../models/book");

const getAllBooks = async () => {
  return await Book.findAll();
};

const getBookByID = async (id) => {
  return await Book.findByPk(id);
};

const addBook = async (bookData) => {
  return await Book.create(bookData);
};

const addBooksInBulk = async (books) => {
  return await Book.bulkCreate(books);
};

const deleteBook = async (id) => {
  return await Book.destroy({ where: { id } });
};

module.exports = {
  getAllBooks,
  getBookByID,
  addBook,
  addBooksInBulk,
  deleteBook,
};
