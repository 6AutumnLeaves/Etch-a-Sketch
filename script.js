

const grid = document.querySelector(".grid-container");
let gridLayout = '';
// chooseCorrectNumber();
const clearGrid = () => {
    gridSquares = document.querySelectorAll(".grid-item");
   
    
    gridSquares.forEach(gridSquare => {
        grid.removeChild(gridSquare);
    });
}


const drawGrids = (gridLayout) => {
// checkCorrectNumber();
gridLayout = document.getElementById("grid-sizing").value;
clearGrid();
grid.style.setProperty('--grid-rows', gridLayout);
grid.style.setProperty('--grid-columns', gridLayout);
for (i = 0; i < gridLayout * gridLayout; i++) {
    let cell = document.createElement('div');
    cell.addEventListener('mouseover', (e) => {
        cell.classList.add('grid-colored-black');
    });
    grid.appendChild(cell).className = "grid-item";
    
};
console.log(gridLayout);
};



const checkCorrectNumber = () => {
    let prompt = '';
    if (gridLayout < 1 || gridLayout > 64) {
        prompt = `You typed ${gridLayout}. Must be number from 1 to 64`;
        alert(prompt);
    }
}
// let gridSquares = document.querySelectorAll(".grid-item");



drawGrids(16);


