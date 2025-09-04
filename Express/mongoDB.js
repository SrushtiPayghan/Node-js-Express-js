// const express = require('express');
// const connectDB = require('./db/db_connection');

// const app = express();

// connectDB();

// const user=require('./models/userModel');

// const addUser=async()=>{
//     await  user.create({
//         name:"Srushti Payghan",
//         email:"srushtipayghan@gmail.com"
//     })
// }

// addUser();
// app.listen(3000,()=>{
//     console.log("Server is running on port 3000");
// });
const express = require('express');
const connectDB = require('./db/db_connection');
const user = require('./models/userModel');

const app = express();

const startServer = async () => {
    try {
        await connectDB();

        await user.create({
            name: "Srushti Payghan",
            email: "srushtipayghan@gmail.com"
        });

        app.listen(3000, () => {
            console.log("Server is running on port 3000");
        });
    } catch (err) {
        console.error("Failed to start server:", err);
    }
};

startServer();