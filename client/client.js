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

