//builtin event listener
// const fs=require("fs");
// const myRead=fs.createReadStream('./input.txt');
// myRead.on('open',()=>{
//     console.log('The file is open');    
// });

//custom event listener
const event=require('events');
const eventEmitter=new event.EventEmitter();
eventEmitter.on('play',(type)=>{
    console.log(`I am playing ${type}`);
});
eventEmitter.emit('play','cricket');
