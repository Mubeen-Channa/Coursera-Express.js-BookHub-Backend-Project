const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

app.use(bodyParser.json());

const PORT = 3000;


// --- Render to /books --- 
app.get('/', (req, res) => {
    res.redirect("/books");
});


// Server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});  