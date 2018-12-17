function myCb(a, b, clb) {
    console.log('myCb', a, b)
    clb()
}

myCb(4, 4, function () { console.log('I am callback') })


setInterval(() => {
    console.log(new Date())
}, 1000)


// btn-1
const btn = document.querySelector('#btn-1');

btn.addEventListener('click', b)

function b() {
    console.log('***')
}








// callback functions

// promise f

// async/await f