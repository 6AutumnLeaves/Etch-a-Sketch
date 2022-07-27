const gridSquares = document.querySelectorAll(".grid-item");



gridSquares.forEach(gridSquare => {
    gridSquare.addEventListener('mouseover', (e) => {
        gridSquare.classList.add('grid-colored-black');
    });
});
