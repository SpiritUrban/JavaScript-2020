const log = console.log;
let snake = document.querySelectorAll('.snake');
const area = document.querySelector('.area')


const virtualSnake = {
    x: 0,
    y: 0
}
let direction = 'Right'


move({ key: '' })
window.addEventListener('keydown', changeDirection)
setInterval(move, 300)
setInterval(addFood, 4000)


function changeDirection(e) {
    if (e.key == 'ArrowUp') direction = 'Up'
    if (e.key == 'ArrowDown') direction = 'Down'
    if (e.key == 'ArrowLeft') direction = 'Left'
    if (e.key == 'ArrowRight') direction = 'Right'
}


function move() {
    snake = document.querySelectorAll('.snake');

    for (let i = snake.length - 1; i > 0; i--) {
        snake[i].style.left = snake[i - 1].style.left
        snake[i].style.top = snake[i - 1].style.top
    }

    if (direction == 'Up') virtualSnake.y--
    if (direction == 'Down') virtualSnake.y++
    if (direction == 'Left') virtualSnake.x--
    if (direction == 'Right') virtualSnake.x++

    if (virtualSnake.y < 0) virtualSnake.y = 9
    if (virtualSnake.y > 9) virtualSnake.y = 0
    if (virtualSnake.x < 0) virtualSnake.x = 9
    if (virtualSnake.x > 9) virtualSnake.x = 0

    snake[0].style.left = virtualSnake.x * 40 + 'px'
    snake[0].style.top = virtualSnake.y * 40 + 'px'

    checkFoodCollision()
    checkSelfCollision()
}

function checkSelfCollision () {
    snake = document.querySelectorAll('.snake');
    let i = 0
    for (let chunk of snake) {
        chunk.x = pxToPosition(chunk.style.left)
        chunk.y = pxToPosition(chunk.style.top)
        if ( i > 0 &&
            virtualSnake.x == chunk.x &&
            virtualSnake.y == chunk.y) {
                alert('Game over')
                location.reload()
            }
            i++
    }
}

function checkFoodCollision() {
    const Allfood = document.querySelectorAll('.food')
    for (let food of Allfood) {
        food.x = pxToPosition(food.style.left)
        food.y = pxToPosition(food.style.top)
        if (virtualSnake.x == food.x &&
            virtualSnake.y == food.y) {
                log('Collision')
                food.remove()
                addTail()
            }
    }
}

function pxToPosition(px) {
    let textNumber = px.replace('px', '')
    let number = parseInt(textNumber)
    let position = number / 40
    // log(textNumber, number, position)
    return position
}

function addTail() {
    area.innerHTML += `<div class="snake tail"></div>`
}

function addFood() {
    log(rendomPosition())
    let rand_1 = rendomPosition() * 40
    let rand_2 = rendomPosition() * 40

    area.innerHTML += `
    <div 
        class="food" 
        style="left: ${rand_1}px; top: ${rand_2}px"></div>
    `
}

function rendomPosition() {
    let position = Math.random() * 10
    position = Math.floor(position)
    return position
}

