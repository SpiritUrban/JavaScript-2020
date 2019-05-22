
const http = require('http');

const sever = http.createServer(app)

sever.listen(5555)

function app (request, response){
    console.log('hello', request.url)
    response.end('Hello')
}


console.log('The NodeJS server')

