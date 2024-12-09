const express = require("express");
const bookService = require("../services/bookService");

const router = express.Router();

// Pobranie wszystkich książek
router.get("/api/books", async (req, res) => {
  try {
    const books = await bookService.getAllBooks();
    res.json(books);
  } catch (error) {
    res.status(500).send("Błąd podczas pobierania książek.");
  }
});

// Pobranie jednej książki
router.get("/api/books/:id", async (req, res) => {
  try {
    const book = await bookService.getBookByID(req.params.id);
    if (book) {
      res.json(book);
    } else {
      res.status(404).send("Nie znaleziono książki.");
    }
  } catch (error) {
    res.status(500).send("Błąd podczas pobierania książki.");
  }
});

// Dodanie nowej książki
router.post("/api/books", async (req, res) => {
  const { name, author, year } = req.body;
  if (!name || !author || !year) {
    return res.status(400).send("Nieprawidłowe dane wejściowe.");
  }

  try {
    const book = await bookService.addBook({ name, author, year });
    res.status(201).json({ id: book.id });
  } catch (error) {
    res.status(500).send("Błąd podczas dodawania książki.");
  }
});

// Dodanie wielu książek
router.post("/api/books/bulk", async (req, res) => {
  const books = req.body;
  try {
    const createdBooks = await bookService.addBooksInBulk(books);
    res.status(201).json(createdBooks);
  } catch (error) {
    res.status(500).send("Błąd podczas dodawania książek.");
  }
});

// Usunięcie książki
router.delete("/api/books/:id", async (req, res) => {
  try {
    const rowsDeleted = await bookService.deleteBook(req.params.id);
    if (rowsDeleted) {
      res.status(200).send("Pomyślnie usunięto książkę.");
    } else {
      res.status(404).send("Nie znaleziono książki.");
    }
  } catch (error) {
    res.status(500).send("Błąd podczas usuwania książki.");
  }
});

module.exports = router;
