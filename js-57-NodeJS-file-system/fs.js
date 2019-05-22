const log = console.log;

const fs = require('fs');

// console.log(fs)

// fs.writeFile('example.text', 'The some text!', (err)=>{
//     if (err) console.log(err)
//     console.log('The file writen')

//     fs.readFile('example.text', 'utf-8', (err, data)=>{
//         if (err) console.log(err)
//         console.log(data)

//         fs.readdir('f', (err, files)=>{
//             console.log(files)
//         })

//     })

// })

// fs.mkdir('q', (err)=>{
//     if (err) log(err)
//     else log('folder was created')
// })

// fs.rmdir('q', (err)=>{
//     if (err) log(err)
//     else log('removed')
// })

// fs.stat('q', (err, stats)=>{
//     if (err) log(err)
//     else log('stats: ', stats)
// })

// fs.access('q', fs.constants.F_OK, (err) => {
//     console.log(`File ${err ? 'does not exist' : 'exists'}`);

//     if (err) log('File does not exist')
//     else log('File exists')
//   })

// fs.watchFile('example.text', (curr, prev) => {
//     console.log(`the current mtime is: ${curr.mtime}`);
//     console.log(`the previous mtime was: ${prev.mtime}`);
//     // log(curr)
//     // log(prev)
//   });

fs.copyFile('example.text', 'destination.text', (err) => {
    if (err) throw err;
    console.log('source.txt was copied to destination.txt');
  });



// console.log('Before')
// fs.writeFileSync('example.text', 'writeFileSync')
// console.log('After')

