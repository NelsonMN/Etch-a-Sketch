// adding 16x16 grid of square divs

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
            row.append(div)
    }
}}


createRows(4)
createColumns(4)