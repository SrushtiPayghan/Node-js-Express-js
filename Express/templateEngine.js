const express = require('express');
const app = express();

app.set('view engine', 'ejs'); 

app.get('/welcome', (req, res) => {
    const empInfo={
        name: "Srushti",
        age: 24,
        city: "Pune"
    }
    res.render('welcome',{empInfo});
})

app.listen(2000, () => {
    console.log("Server is running on port 2000");
})