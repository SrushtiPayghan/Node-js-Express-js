const express= require('express');
const connectDB=require('./db/db_connection')
const Employee=require('./models/employeeModel')

const app=express();

connectDB();

const addEmployee=async ()=>{
    await Employee.create({
        name:"Priti Katkade",
        email:"priti01@gmail.com",
        position:"Developer",
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