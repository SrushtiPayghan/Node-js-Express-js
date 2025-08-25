const express = require('express');
const app = express();

app.get('', (req, res) => {
    res.send('Hello World');
});
app.get('/contact', (req, res) => {
    res.send('Contact US');
});
app.listen(1000);