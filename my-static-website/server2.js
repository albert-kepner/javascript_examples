const express = require('express');
const path = require('path');
const app = express();
const PORT = 3002;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index2.html'));
});

app.get('/page1', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'page1.html'));
});

app.get('/page2', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'page2.html'));
});

app.get('/page3', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'page3.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
