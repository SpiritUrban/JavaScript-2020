// document.write('<div> Add some new </div>');
// document.write('<br>');
// document.write(`<div> Add some new </div>`);


let куди = 'Одеса';
let wagon = [];

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

function khmelnitsky() {
    // Station Khmelnitsky
    //alert('Khmelnitsky');
    console.log('Khmelnitsky');
    wagon.push({
        name: 'Ivan',
        age: 21
    })
    s1.style.top = '100px'
    s1.style.left = '100px'
}

function vinitsa() {
    // Station Vinitsa
    //alert('Vinitsa');
    console.log('Vinitsa');
    wagon.push({
        name: 'Inna',
        age: 18
    })
    s1.style.top = '100px'
    s1.style.left = '160px'
}

function odesa() {
    //alert('Odesa');
    console.log('Одеса');
    console.log(' Купити пиріжків ');
    console.log(' In wagon: ', wagon);
    s1.style.left = '200px'
    s1.style.top = '300px'

}

function kiev() {
    //alert('Kiev')
    console.log('1');
    console.log('2');
}
