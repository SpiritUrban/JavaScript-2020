// document.write('<div> Add some new </div>');
// document.write('<br>');
// document.write(`<div> Add some new </div>`);


let куди = 'Одеса';
let wagon = [];

let i = 1;
let direction = 'to Odesa'

setInterval(function () {
    console.log(i)
    if (i == 1) to_khmelnitsky()
    if (i == 2) to_vinitsa()
    if (i == 3) to_point()

    if (i == 3) direction = 'to khmelnitsky'
    if (i == 1) direction = 'to Odesa'
    if (direction == 'to Odesa') i++
    if (direction == 'to khmelnitsky') i--
}, 3000)

// button 1
function to_khmelnitsky() {
    khmelnitsky();
}

// button 2
function to_vinitsa() {
    vinitsa();
}

// button 3
function to_point() {
    if (куди == 'Одеса') odesa()
    else kiev()
}




// ------------------------- fUNCTIONS: 

// Station Khmelnitsky
function khmelnitsky() {
    console.log('Khmelnitsky');
    wagon.push({
        name: 'Ivan',
        age: 21
    })
    s1.style.top = '100px'
    s1.style.left = '100px'
}

// Station Vinitsa
function vinitsa() {
    console.log('Vinitsa');
    if (direction == 'to Odesa') {
        wagon.push({
            name: 'Inna',
            age: 18
        })
    }
    s1.style.top = '100px'
    s1.style.left = '160px'
}

// Station Odesa
function odesa() {
    console.log('Одеса');
    console.log(' Купити пиріжків ');
    console.log(' In wagon: ', wagon);
    s1.style.left = '200px'
    s1.style.top = '300px'
    wagon.pop()
    wagon.pop()
}

// Station Kiev
function kiev() {
    console.log('1');
    console.log('2');
}
