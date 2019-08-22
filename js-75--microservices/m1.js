const http = require('http');
const fs = require('fs');

http.createServer((req, res)=>{
    const page = fs.readFileSync('index.html')
    res.end(page)
}).listen(80)

console.log('m1 started. port: 80')
// npm i nodemon -g