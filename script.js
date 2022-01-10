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
function reset(element) {
    const container = document.querySelector('.container');
    const squares = Array.from(document.querySelectorAll('.column-square'))
    squares.forEach(function(element) {
        element.style.backgroundColor = 'white';
    })
    deleteGrid(container);
    getGridSize();
}

// Erase Button
function erase() {
    const squares = Array.from(document.querySelectorAll('.column-square'))
    squares.forEach(function(element) {
        element.addEventListener('mouseover', () => {
        element.style.backgroundColor = 'white';}
            )})
}


// MouseOut Event Listener - Black
function drawBlack() {
    const squares = Array.from(document.querySelectorAll('.column-square'))
    squares.forEach(function(element) {
        element.addEventListener('mouseover', () => {
            element.style.backgroundColor = 'black';}
        )})
}


// Grabbing Random Colours
function randomColour() {
    const x = Math.round 
    const y = Math.random
    const z = 255;
    return 'rgba(' + x(y()*z) + ',' + x(y()*z) + ',' + x(y()*z) + ',' + y().toFixed(1) + ')';
}


// MouseOut Event Listener - Rainbow
function drawRainbow() {
    const squares = Array.from(document.querySelectorAll('.column-square'))
    squares.forEach(function(element) {
        element.addEventListener('mouseover', () => {
            element.style.backgroundColor = randomColour();}
        )})
}


// MouseOut Event Listener - Greyscale
function greyScale() {
    const squares = Array.from(document.querySelectorAll('.column-square'))
    squares.forEach(function(element) {
        element.addEventListener('mouseover', () => {
            element.style.backgroundColor = 'black';
            let opacity = Number(element.style.opacity);
            opacity += 0.1;
            element.style.opacity = opacity;
        })})
    }


// Default Starting Grid
createRows(10);
createColumns(10);