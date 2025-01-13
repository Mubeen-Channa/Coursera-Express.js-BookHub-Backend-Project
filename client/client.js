const axios = require('axios');
const baseURL = 'http://localhost:3000';


// Task 10
async function getAllBooks() {
    try {
      const response = await axios.get(`${baseURL}/books`);
      console.log("All Books:", response.data);
    } catch (err) {
      console.error(err.message);
    }
}


// Task 11
function searchByISBN(isbn) {
    return axios.get(`${baseURL}/books/isbn/${isbn}`)
      .then(res => console.log("Book by ISBN:", res.data))
      .catch(err => console.error(err.message));
}


// Task 12 Search by Author
async function searchByAuthor(author) {
    try {
      const response = await axios.get(`${baseURL}/books/author/${author}`);
      console.log("Books by Author:", response.data);
    } catch (err) {
      console.error(err.message);
    }
}

// Task 13 Search by Title
async function searchByTitle(title) {
    try {
      const response = await axios.get(`${baseURL}/books/title/${title}`);
      console.log("Books by Title:", response.data);
    } catch (err) {
      console.error(err.message);
    }
  }


// Run the functions as a test
// getAllBooks();
// searchByISBN("12345");
// searchByAuthor("Author A");
// searchByTitle("Book One");