const express = require('express');
const multer = require('multer');
const connectDB = require('./db/db_connection');
const File = require('./models/fileModel');


const app=express();

connectDB();

const fileUpload = multer({
    storage: multer.diskStorage({
        destination: function(req, file, callback){
            callback(null, 'uploads')
        },
        filename : function(req, file, callback){
           const uniqueName = file.fieldname + "-" + Date.now() + ".jpg"
           callback(null, uniqueName);
        }
})
}).single("my_file")

app.post('/file-upload',fileUpload,(req,res) =>{
    if(!req.file){
        return res.status(400).send("No file uploaded");
    }
const newFile = new File({
    filePath: req.file.path
});
    newFile.save()
    .then(()=> res.send("File uploaded successfully"))
     .catch((error)=>res.status(500).send("Error saving file info to database: " + error));

});
app.listen(8080,()=>{
    console.log("Server is running on port 8080");
})

