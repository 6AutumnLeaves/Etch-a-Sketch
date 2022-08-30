const grid = document.querySelector(".grid-container");





let gridLayout;

const clearGrid = () => {
    gridSquares = document.querySelectorAll(".grid-item");
   
    
    gridSquares.forEach(gridSquare => {
        grid.removeChild(gridSquare);
    });
}


const drawGrids = (gridLayout) => {

gridLayout = document.getElementById("grid-sizing").value;
grid.style.setProperty('--grid-rows', gridLayout);
grid.style.setProperty('--grid-cols', gridLayout);
for (i = 0; i < gridLayout * gridLayout; i++) {
    let cell = document.createElement('div');
    cell.addEventListener('mouseover', (e) => {
        cell.classList.add('grid-colored-black');
    });
    grid.appendChild(cell).className = "grid-item";
    
};
console.log(gridLayout);
};



const getSize = () => {
    let prompt;
    let newGrid = document.getElementById("grid-sizing").value;
    let desiredValue = parseInt(newGrid);

    if (desiredValue >= 1 && desiredValue <= 64) {
        gridLayout = newGrid;
        
        clearGrid();
        drawGrids();
    }else{
        prompt = `You typed ${newGrid}. Must be number from 1 to 64`;
        alert(prompt);
    }
}



drawGrids(16);


