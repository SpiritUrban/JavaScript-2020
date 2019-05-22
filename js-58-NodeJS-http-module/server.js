const log = console.log;
const http = require('./node_modules/http');
const fs = require('./node_modules/fs');

const app = (req, res)=> {
    reqHandler(req, res)
};

const srver = http.createServer( app );

srver.listen(3000);

log('Started');

function reqHandler(req, res){
    router('/', req, res,  (req, res,)=>{
        fs.readFile('index.html', 'utf-8', (err, html)=>{
            res.end(html);
        })
    })
    router('/home', req, res,  (req, res,)=>{
        fs.readFile('home.html', 'utf-8', (err, html)=>{
            res.end(html);
        })
    })
}

function router(path, req, res, cb){
    if (req.url == path) cb(req, res);
}


// /favicon.ico

