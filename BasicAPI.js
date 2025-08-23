const http=require('http');
const data=require('./empData');
http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'application/json'});
//   res.write(JSON.stringify({ name:'srushti', age: 21, city: 'Pune' }));
    res.write(JSON.stringify(data));
  res.end();
}).listen(1000);