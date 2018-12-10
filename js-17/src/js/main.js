//
// delarative function (have 'hoisting')
// 
function sum() {

    let sum_x = 0

    for (let i = 0; i < arguments.length; i++) {
        sum_x = sum_x + arguments[i]
    }

    return sum_x
}

let result = sum(1, 6, 4, 5, 7)
console.log(result)


//
// functional expression (does not have 'hoisting')
//
let sum2 = function(a,b) {
    return a + b
}
console.log( sum2(2,2) )


//
// arrow function (does not have 'this') (does not have 'hoisting')
//
let sum3 = (a,b) => {
    return a + b
}
console.log( sum2(2,2) )

let mult = a => a * a

console.log( mult(9) )



// calback functions

// promise f

// async/await f