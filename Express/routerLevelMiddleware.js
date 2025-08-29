const express=require('express');
const reqFilter=require('./middleware');
const app=express();

const route=express.Router();
route.use(reqFilter);

app.get('/',(req,res)=>{
    res.send('Welcome to Home Page');
}   );

route.get('/users',(req,res)=>{
    res.send('Welcome to Users Page');
}   );
route.get('/about',(req,res)=>{
    res.send('Welcome to About Page');
}   );
app.use('/',route);
app.listen(2000);