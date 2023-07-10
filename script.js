const container = document.getElementById('container');
let gridSize = 16;

function newGrid() {
    container.innerHTML = '';
    
    const squareSize = 600/(gridSize + 1);

    for (let i = 0; i < gridSize*gridSize; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.width = squareSize + 'px';
        square.style.height = squareSize + 'px';
    
        square.addEventListener('mouseover', () => {
            square.classList.add('hovered');
        })
    
        square.addEventListener('mouseout', () => {
            square.classList.remove('hovered');
        })
    
        container.appendChild(square);
    }
}

function resetGrid() {
    const input = prompt('How many squares per side for the new grid? max: 100 squares');
    const newGridSize = parseInt(input);

    if (newGridSize && newGridSize > 0 && newGridSize <= 100) {
        gridSize = newGridSize;
        newGrid();
    }
    else {
        alert('Invalid input. Please enter a number between 1 and 100.');
      }
}

document.getElementById('newButton').addEventListener('click', resetGrid);

newGrid();
