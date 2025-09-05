const express = require('express');
const connectDB=require('./db/db_connection');
const Employee=require('./models/employeeModel');

const app = express();

connectDB();

app.use(express.json());

app.put('/employees/:id', async (req, res) => {
    try {
        const employeeId = req.params.id;
        const { name,email, position, department } = req.body;
        const updatedEmployee = await Employee.findByIdAndUpdate(
            employeeId,
            { name, email, position, department },
            { new: true}
        );
        if (!updatedEmployee) {
            return res.status(404).json({ msg: 'Employee not found' });
        }
        res.json(updatedEmployee);
    }
    catch (error) {
        console.error("Error updating employee Data:", error);
        res.status(500).send('Server Error');
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

    
