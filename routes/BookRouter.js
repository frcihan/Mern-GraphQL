const express = require("express");
const router = express.Router();
const BookController = require("../controllers/BookController");

// base url: /api/books

/**
 * @route   GET /api/books
 * @desc    Books Listing endpoint
 * @access  Public
 */
router.get("/", BookController.getBookList);

/**
 * @route   GET /api/books/details/:id
 * @desc    Books Details endpoint
 * @access  Public
 */
router.get("/details/:id", BookController.getBookDetails);

module.exports = router;
