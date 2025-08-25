const fs=require('fs');
const path=require('path');
const myCURD=path.join(__dirname,'CURD');
const mypath=`${myCURD}/curd.txt`;

// Create
//  fs.writeFileSync(mypath,'CREATE UPDATE READ DELETE');

// Read (hexadecimal format)
// fs.readFile(mypath,(err,file)=>{
//     console.log(file);
// })

// Read (utf-8 format)
//  fs.readFile(mypath,'utf-8',(err,file)=>{ 
//     console.log(file);
//  })

//Read(tostring method )
//  fs.readFile(mypath,(err,file)=>{
//     console.log(file.toString());  
//     });

// Update
//  fs.appendFile(mypath,'\nI am learning Node js',(err)=>{
//     if(!err) console.log('File Updated');
//  })

// Delete
//  fs.unlinkSync(mypath);

//Rename
//  fs.rename(mypath,`${myCURD}/mycurd.txt`,(err)=>{
//     if(!err) console.log('File Renamed');
//  });