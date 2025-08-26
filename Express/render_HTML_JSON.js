const express = require('express');
const app = express();

app.get('', (req, res) => {
    res.send(`
        <input type="text" placeholder="Enter Name" />
        <a href="/contact">Go to Contact</a>
        `);
});

app.get('/contact', (req, res) => {
    res.send(`
        <h1>Contact Page</h1>
        <a href="/about">Go to about</a>
        `);
 
        
});

app.get('/about', (req, res) => {
    res.send([
        {name:"srushti",address:"Shevgaon"},
        {name:"snehal",address:"Pune"}, 
        {name:"sonali",address:"Mumbai"}
    ])
});


app.listen(2000);