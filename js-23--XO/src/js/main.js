const log = console.log

const cellsNL = document.querySelectorAll('.cel')
const cells = nodeListToArr(cellsNL)
 
// add listeners to cells
cells.map((cel)=>{
    cel.addEventListener('click', celReaction)
})

// cell reaction
function celReaction(e) {
    log('5', e)
    // e.originalTarget.innerHTML = 'X'
    e.path[0].innerHTML = 'X'

    check('X')
    computerStep()
    check('O')
}
 
// computer make step
let counterCS = 0;
function computerStep(){
    counterCS++
    if (counterCS > 300) return
    //log(' GO PC')
    const rand = random()
    //log(rand)
    if (cells[rand].innerHTML.length > 0 ) computerStep()
    else cells[rand].innerHTML = 'O'
}

// CHECK WHO WON
function check(sign) {
    log('sign', sign)
    if (
        inCell(0) == sign && inCell(1) == sign && inCell(2) == sign  || // row 1
        inCell(3) == sign && inCell(4) == sign && inCell(5) == sign  || // row 2
        inCell(6) == sign && inCell(7) == sign && inCell(8) == sign  || // row 3

        inCell(0) == sign && inCell(3) == sign && inCell(6) == sign  || // col 1
        inCell(1) == sign && inCell(4) == sign && inCell(7) == sign  || // col 2
        inCell(2) == sign && inCell(5) == sign && inCell(8) == sign  || // col 3

        inCell(0) == sign && inCell(4) == sign && inCell(8) == sign  || // down
        inCell(6) == sign && inCell(4) == sign && inCell(2) == sign  // up

        ) won(sign)
}

// get cell content
function inCell (n) {
    const celLink = cells[n]
    return celLink.innerHTML
}

// game end
function won(sign) {
    setTimeout(()=> location.reload(), 101)
    setTimeout(()=> alert( sign + ' won!!!'), 100)
}

