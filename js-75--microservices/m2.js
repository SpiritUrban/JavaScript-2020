const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    const date = new Date()
    const ms = date.getTime()
    console.log(date.getTime())

    res.setHeader("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
    res.setHeader("Access-Control-Allow-Origin", "http://localhost");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.end(ms + '')

}).listen(3001)

console.log('m2 started. port: 3001')