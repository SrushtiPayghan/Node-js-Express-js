// const http = require('http');
// http.createServer((request,response) =>{
//   response.write("Hello from Node.js server!");
//   response.end();
// }).listen(3000);
// console.log("Server is running on http://localhost:3000");

//using html content
const http = require('http');
// http.createServer((request,response) =>{
//     response.writeHead(200, {'Content-Type': 'text/html'});
//   response.write("<h1>Hello from Node.js server!</h2>");
//   response.end();
// }).listen(1000);

//function as a parameter
const abc = (request, response) => {
    response.write("hello from abc function");
    response.end();
}
http.createServer(abc).listen(4200);
