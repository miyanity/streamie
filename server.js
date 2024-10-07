// importing express
const express = require('express');
const app = express();
const port = 3000;

// midleware to parse JSON bodies 
app.use(express.json());
app.use(express.static('public')); // serve static files from the public directory

// sample route
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html'); // serve the index.html file
});

// start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});