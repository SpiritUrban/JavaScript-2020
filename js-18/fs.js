console.log(' I am fs.js ')

const fs = require('fs')

fs.readFile('index.html', 'utf-8', function(err, data){
    console.log(data)
    fs.writeFile('2.html', data, function(){
        console.log('File written')
    })
})
