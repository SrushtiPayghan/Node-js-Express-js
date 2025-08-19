const myfile=require('fs');
console.log("File System Module Loaded");
myfile.writeFileSync('coreModules.txt', 'Node JS coreModules.');
console.log("File written successfully!");