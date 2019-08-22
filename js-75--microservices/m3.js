const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    const url = req.url;
    const fName = url.substring(1, url.length)
    console.log(fName)

    res.setHeader("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
    res.setHeader("Access-Control-Allow-Origin", "http://localhost");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    
    fs.writeFile(`lables/${fName}.txt`, '1', (err)=>{
        if (err) res.end('fuck')
        else res.end('ok '+ fName)
    })
}).listen(3002)

console.log('m2 started. port: 3002')