const express = require('express');
const app = express();
const bodyParser = require('body-parser');
// const cors = require('cors'); // Import the cors middleware
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use(cors()); // Use cors middleware

app.post('/submit', (req, res) => {
    res.json(req.body.name);
});

// Start the server
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
