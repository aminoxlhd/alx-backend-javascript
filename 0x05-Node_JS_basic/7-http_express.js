const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
const port = 1245;

// Handle the root path
app.get('/', (req, res) => {
  res.type('text/plain'); // Set response content type to plain text
  res.send('Hello Holberton School!');
});

// Handle the /students path
app.get('/students', async (req, res) => {
  try {
    const filePath = process.argv[2]; // Access database path from argument
    const data = await countStudents(filePath);
    res.type('text/plain'); // Set response content type to plain text
    res.send(`This is the list of our students\n${data}`);
  } catch (error) {
    res.status(500).send(error.message); // Send error message on failure
  }
});

// Handle all other paths (optional)
app.get('*', (req, res) => {
  res.status(404).send('Not found'); // Send 404 for unmatched routes
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

module.exports = app;
