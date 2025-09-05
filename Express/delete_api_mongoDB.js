const express = require('express');
const connectDB = require('./db/db_connection');
const Employee=require('./models/employeeModel');

const app = express();

connectDB();

app.delete('/employees/:id',async(req,res)=>{
    try{
        const employeeId=req.params.id;
        const deletedEmployee=await Employee.findByIdAndDelete(employeeId);

        if(!deletedEmployee){
            return res.status(404).json({message:'Employee not found'});
        }   
        res.json({message:'Employee deleted successfully'});
    }
    catch(error){
        console.error('Error deleting employee:',error);
        res.status(500).json({message:'Server Error'});
    }
});

app.listen(1000,()=>{
    console.log('Server is running on port 1000');
});