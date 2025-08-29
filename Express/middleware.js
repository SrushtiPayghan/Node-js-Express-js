const reqFilter=(req,res,next)=>{
    const salary=req.query.salary;
    if(!salary){
        res.send('Please provide salary');
    }
    else if(salary<5000){
        res.send('Your salary is below 50k');
    }
    else{
        next();
    }

}
module.exports=reqFilter;