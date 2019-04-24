const http = require('http');

http
  .createServer((req, res) => {
    console.log('req', req.url);


    let body = [];


    req.on('data', (chunk) => {
      body.push(chunk);
      console.log('req_on', chunk.toString());

    }).on('end', () => {
      body = Buffer.concat(body).toString();
      res.end(body);
    });


    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    res.write('{"a":"3"}');

    let o = { a: 3 }

    res.end();
  })
  .listen(8080)