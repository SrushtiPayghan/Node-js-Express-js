// const express = require('express');
// const connectDB = require('./db/db_connection');
// const Employee = require('./models/employeeModel');

// const app = express();
// connectDB();

// const getEmployees = async () => {
//     const employees = await Employee.find();
//     console.log("Employees Data Before Update:", employees);
// }

// const updateEmployee = async (id, updateData) => {
//   const result = await Employee.updateOne({ _id: id }, { $set: updateData });
//   console.log(
//     result.nModified === 0 ? `No updates for employee ${id}` : 'Updated employee Data :',result
//   )
// }

// const deleteEmployee = async (id) => {
//     await Employee.findByIdAndDelete(id);
//     console.log(`Employee ${id} deleted`);
// }

// const main = async () => {
//     await getEmployees();

//     const employeeID='68b69287dcc20de1229710b5';
//     const updateData={
//         position: "Senior Developer",
//         department:"DEV"
//     };
//     await updateEmployee(employeeID, updateData);

//     await getEmployees();

//     await deleteEmployee(employeeID);
//     await getEmployees();
// }

// main();

// app.listen(1000),()=>{
//     console.log("Server is running on port 1000");
// }

const express = require('express');
const connectDB = require('./db/db_connection');
const Employee = require('./models/employeeModel');

const app = express();

const getEmployees = async () => {
    const employees = await Employee.find();
    console.log("Employees Data Before Update:", employees);
}

const updateEmployee = async (id, updateData) => {
  const result = await Employee.updateOne({ _id: id }, { $set: updateData });
  console.log(
    result.nModified === 0 ? `No updates for employee ${id}` : 'Updated employee Data :',result
  )
}

const deleteEmployee = async (id) => {
    await Employee.findByIdAndDelete(id);
    console.log(`Employee ${id} deleted`);
}

const main = async () => {
    await connectDB(); // Wait for DB connection

    await getEmployees();

    const employeeID='68b69287dcc20de1229710b5';
    const updateData={
        position: "Senior Developer",
        department:"DEV"
    };
    await updateEmployee(employeeID, updateData);

    await getEmployees();

    await deleteEmployee(employeeID);
    await getEmployees();
}

main();

app.listen(1000, () => {
    console.log("Server is running on port 1000");
});