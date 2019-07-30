const fs = require('fs');

function write(info){
    return new Promise( (resolve, rejet)=>{
        fs.writeFile('text.txt', info, (err)=>{
            if (err) reject(err)
            resolve('ok')
        })
    } )
}

// 10
async function simple () {
    let status = 'start'
    write('some info')
        .then( rezult =>  {
            status = rezult
            console.log(status)
        } )
        .catch( err => {
            status = err
            console.log(status)
        } )
}

// 8 (3)
async function best () {
    try {
        let status = 'start'
        status = await write('some info')
        status = await write('some info 2')
        status = await write('some info 3')
        console.log(status)
        return '*** ' + status
    } catch (err) {
        status = err
        console.log(status)
    }
}

best().then(console.log)

// 27/5