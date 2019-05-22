// node - js environment
// npm - node package manager

console.log('Hello ', 2+2);

// alert('Error!')
// node has no the 'window' object
// node has no the 'document' object

// but Node has a 'global' object
// console.log(global);

[1,2,3].map( (number)=> {
    console.log(number)
});

// and has banch of modules
const fs = require('fs');

fs.readFile('selfsuficient.js', 'utf-8', (err, data)=>{
    console.log(err, data)
} )


const text = `
    console.log('The NodeJS server')
`;

fs.writeFile('server.js', text, (err)=>{
    console.log(err)
} )


