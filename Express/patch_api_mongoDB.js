const express = require('express');
const connectDB = require('./db/db_connection');
const Employee = require('./models/employeeModel');

const app = express();

connectDB();
app.use(express.json());

app.patch('/employees/:id', async (req, res) => {
    try {
       const employeeId = req.params.id;
       const updateData = req.body;
       const updatedEmployee = await Employee.findByIdAndUpdate(
        employeeId,
        {$set: updateData},
        {new:true}
    ); 
         if (!updatedEmployee) {
            return res.status(404).json({ message: 'Employee not found' });
         }
            res.json(updatedEmployee);
}
    catch (error) {
        console.error('Error updating employee:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

app.listen(2000, () => {
    console.log('Server is running on port 2000');
});