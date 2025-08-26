const express = require('express');
const app = express();

app.get('', (req, res) => {
    // res.send('Hello World!');
    const name=req.query.name;
    if(name){
        res.send(`Hello ${name}` );
    }
    else{
        res.send('routing parameters in express js');
    }
});

app.listen(1000,() => {
    console.log('Server started at port 1000')
});