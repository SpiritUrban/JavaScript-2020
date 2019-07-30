const fs = require('fs').promises;

(async function(){
    fs.writeFile('test.txt', 'Success!!!')

    const data =  await fs.readFile('test.txt', 'utf-8')
    console.log(data)
}());