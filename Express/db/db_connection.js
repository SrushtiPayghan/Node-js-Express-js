const mongoose = require('mongoose');

const connectDB = async () => {
    try{
         await mongoose.connect('mongodb+srv://srushtipayghan_db_user:yHijmExGpD2mxG55@cluster0.c0s6tqr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
            console.log("Mongo DB connected successfully");
    }
    catch(err){
        console.log("Mongo DB connection error: ",err);
       
    }
}

module.exports = connectDB;