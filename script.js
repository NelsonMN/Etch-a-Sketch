// size X size grid of square divs
function createRows(size) {
    for (let i = 0; i < size; i++) {
        const container = document.querySelector('.container');
        const div = document.createElement('div');
        div.classList.add('row-square');
        container.append(div);
    }
}

function createColumns(size) {
    const rowSquares = document.querySelectorAll('.row-square');
    for (let i = 0; i < size; i++) {
        row = rowSquares[i];
        for (let i = 0; i < size; i++) {
            const div = document.createElement('div');
            div.classList.add('column-square');
            row.append(div);
    }
}}


// Grid Deletion
function deleteGrid(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild)
    }
}


// Creating a new grid after size input
function createGrid(size) {
    createRows(size);
    createColumns(size);
}

function getGridSize() {
    size = prompt("What size grid would you like to use?");
    while (isNaN(size) || size < 2 || size > 50) {
        size = prompt("What size grid would you like to use?");
    }
    createGrid(size);
};


// Reset button
function reset() {
    const container = document.querySelector('.container');
    removeEvents();
    deleteGrid(container);
    getGridSize();
}

// Erase Button
function erase() {
    const squares = document.querySelectorAll('.column-square')
    squares.forEach(function(element) {
        element.addEventListener('mouseover', () => {
        element.style.backgroundColor = '';
    })})} 


// Grabbing Random Colours
function randomColour() {
    const x = Math.round 
    const y = Math.random
    const z = 255;
    return 'rgba(' + x(y()*z) + ',' + x(y()*z) + ',' + x(y()*z) + ',' + y().toFixed(1) + ')';
}


// MouseOut Event Listener - Black
function drawBlack() {
    removeEvents();
    const squares = document.querySelectorAll('.column-square')
    squares.forEach(function(element) {
        element.addEventListener('mouseover', black)
        })}
    

// MouseOut Event Listener - Rainbow
function drawRainbow() {
    removeEvents();
    const squares = document.querySelectorAll('.column-square')
    squares.forEach(function(element) {
        element.addEventListener('mouseover', rgba)
    })}


// MouseOut Event Listener - Greyscale
function drawGreyscale() {
    removeEvents();
    const squares = document.querySelectorAll('.column-square')
    squares.forEach(function(element) {
        element.addEventListener('mouseover', grey)
    })}


// Button Click Events

const resetButton = document.getElementById('reset')
resetButton.addEventListener('click', reset)

const eraseButton = document.getElementById('erase')
eraseButton.addEventListener('click', erase)

const blackButton = document.getElementById('black')
blackButton.addEventListener('click', drawBlack)

const rainbowButton = document.getElementById('rainbow')
rainbowButton.addEventListener('click', drawRainbow)

const greyscaleButton = document.getElementById('greyscale')
greyscaleButton.addEventListener('click', drawGreyscale)


// Remove Event Listeners - 
function removeEvents(){
    const squares = document.querySelectorAll('.column-square')
    squares.forEach(function(element) {
        element.removeEventListener('mouseover', black)
        element.removeEventListener('mouseover', rgba)
        element.removeEventListener('mouseover', grey)
    })
}

// Event Listener Functions
const rgba = function(event) {
    event.target.style.backgroundColor = randomColour();
}

const black = function(event) {
    event.target.style.backgroundColor = 'black';
}

const grey = function(event) {
    event.target.style.backgroundColor = 'black';
    let opacity = Number(event.target.style.opacity);
    if (opacity < 1){
        opacity = opacity + 0.1;
    }
    event.target.style.opacity = opacity;
    }


// Default Starting Grid
createRows(10);
createColumns(10);



