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



// Server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
  