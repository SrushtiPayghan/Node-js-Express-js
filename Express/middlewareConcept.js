const express = require('express');
const app = express();

const reqFilter = (req, res, next) => {
    const salary=req.query.salary;
    if(!salary){
        res.send("Please provide salary details.");

}
    else if(salary<50000){
        res.send("your salary is below 50000");
    }
    else{
        next();
    }
}
app.use(reqFilter);

app.get('/', (req, res) => {
    res.send("This is our middlewarwe concept example.");
});

app.get('/about', (req, res) => {
    res.send("This is about us page.");
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});