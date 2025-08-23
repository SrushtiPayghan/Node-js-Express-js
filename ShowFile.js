const fs=require('fs');
const path=require('path');

const myFolder=path.join(__dirname,'myfolder');

for(let i=0;i<3;i++){
    fs.writeFileSync(`${myFolder}/show${i}.txt`,"This is file number : "+i);
}

fs.readdir(myFolder,(err,files)=>{
    files.forEach(file=>{
        console.log("File name is : ",file);
    })
});