const express= require('express');
const connectDB=require('./db/db_connection')
const Employee=require('./models/employeeModel')

const app=express();

connectDB();

const addEmployee=async ()=>{
    await Employee.create({
        name:"srushti payghan",
        email:"srushtipayghan@gmail.com",
        position:"software Engineer",
        department:"IT"
    })
}
addEmployee();

const getEmployees = async ()=>{
    const employee = await Employee.find();
    console.log(employee);

}
getEmployees();

app.listen(2000,()=>{
    console.log("server is running on port no 2000")
})