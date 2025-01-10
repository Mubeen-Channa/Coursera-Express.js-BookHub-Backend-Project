const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

app.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname, 'views'));
});

app.use(bodyParser.json());

const PORT = 3000;

// In-memory databases
let books = {
  '12345': { title: 'Book One', author: 'Author A', reviews: {} },
  '67890': { title: 'Book Two', author: 'Author B', reviews: "Best Book of 2025" }
};

let users = {
  'user1': { password: 'pass1' }
};

// --- Render to /books --- 
app.get('/', (req, res) => {
  res.redirect("/books");
});


//  Task 1: Get all books
app.get('/books', (req, res) => {
    res.json(books);   
});


// --- Task 2: Get books by ISBN ---
app.get('/books/isbn/:isbn', (req, res) => {
    const book = books[req.params.isbn];
    book ? res.json(book) : res.status(404).send("Book not found");
});


// --- Task 3: Get books by Author ---
app.get('/books/author/:author', (req, res) => {
    const results = Object.values(books).filter(b => b.author === req.params.author);
    res.json(results);
});


// --- Task 4: Get books by Title ---
app.get('/books/title/:title', (req, res) => {
    const results = Object.values(books).filter(b => b.title === req.params.title);
    res.json(results);
});


// --- Task 5: Get Book Review ---
app.get('/books/review/:isbn', (req, res) => {
    const book = books[req.params.isbn];
    if (book) res.json(book.reviews);
    else res.status(404).send("Book not found");
});


// --- Task 6: Register New User ---
app.post('/register', (req, res) => {
    const { username, password } = req.body;
    if (users[username]) {
      res.status(400).send("User already exists");
    } else {
      users[username] = { password };
      res.send("User registered");
    }
});


// --- Task 7: Login User ---
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    if (users[username]?.password === password) {
      res.send("Login successful");
    } else {
      res.status(401).send("Invalid credentials");
    }
});


// --- Task 8: Add/Modify Review ---
app.put('/books/review/:isbn', (req, res) => {
    const { username, review } = req.body;
    const book = books[req.params.isbn];
    if (book) {
      book.reviews[username] = review;
      res.send("Review added/updated");
    } else {
      res.status(404).send("Book not found");
    }
});


// Server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
  