const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files from the "frontend" directory
app.use(express.static(path.join(__dirname, '../')));

// Routes

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../', 'login.html'));
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../', 'index.html'));
});



app.get('/career-options-10th.html', (req, res) => {
    res.sendFile(path.join(__dirname, '../', 'career-options-10th.html'));
});

app.get('/career-options-12th.html', (req, res) => {
    res.sendFile(path.join(__dirname, '../', 'career-options-12th.html'));
});

app.get('/trending-careers.html', (req, res) => {
    res.sendFile(path.join(__dirname, '../', 'trending-careers.html'));
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
