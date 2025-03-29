const container = document.querySelector(".container");
const reset = document.querySelector(".reset");
const set = document.querySelector(".set");
let userInput = document.querySelector("input")

set.addEventListener('click', makeGrid)
reset.addEventListener('click', clearGrid)

//function to make a gird of size based on user input

function makeGrid() {
    let uInput = userInput.value;
    if (uInput < 1 || uInput > 99 || isNaN(uInput)) {
        alert("Invalid input: Value should be between 2-99")
    }
    else {
        for (let i = 0; i < uInput; i++) {
            let row = document.createElement('div');
            container.appendChild(row).className = 'row'
            for (let j = 0; j < uInput; j++) {
                let cell = document.createElement('div')
                row.appendChild(cell).className = 'cell';
            }
        }
    }
    draw();
}

//function to draw on the grid created

function draw() {
    //draw with color black
    let blk = document.querySelector('.black')
    blk.addEventListener('click', () => {
        let cells = document.querySelectorAll(".cell");
        cells.forEach(cell => {
            cell.addEventListener("mouseover", (e) => {
                e.target.style.backgroundColor = 'black';
            })
        })
    })
    //draw with color gray
    let gry = document.querySelector('.gray')
    gry.addEventListener('click', () => {
        let cells = document.querySelectorAll(".cell");
        cells.forEach(cell => {
            cell.addEventListener("mouseover", (e) => {
                e.target.style.backgroundColor = 'gray';
            })
        })
    })
    //draw with random colors
    let rnbw = document.querySelector('.rainbow')
    rnbw.addEventListener('click', () => {
        let cells = document.querySelectorAll(".cell");
        cells.forEach(cell => {
            cell.addEventListener("mouseover", (e) => {
                let randomColor = Math.floor(Math.random() * 16777215).toString(16);
                e.target.style.backgroundColor = "#" + randomColor;
            })
        })
    })
    //option to erase the content drawn till now based on choice
    let ersr = document.querySelector('.eraser')
    ersr.addEventListener('click', () => {
        let cells = document.querySelectorAll(".cell");
        cells.forEach(cell => {
            cell.addEventListener("mouseover", (e) => {
                e.target.style.backgroundColor = 'white';
            })
        })
    })

}
//function to clear the entire grid at once and being again
function clearGrid() {
    let cells = document.querySelectorAll(".cell");
    cells.forEach(cell => {
        cell.style.backgroundColor = 'white'
    })
}












