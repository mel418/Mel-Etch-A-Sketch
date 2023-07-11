const container = document.getElementById('container');
let gridSize = 16;
const clearBtn = document.getElementById('clear')

clearBtn.onclick = () => newGrid()

let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

function newGrid() {
    container.innerHTML = '';
    
    const squareSize = 600 / gridSize;


    for (let i = 0; i < gridSize*gridSize; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.width = squareSize + 'px';
        square.style.height = squareSize + 'px';
        

        square.addEventListener('mouseover', (e) => {
            if (e.type === 'mouseover' && !mouseDown) return
            else square.classList.add('hovered');
        });

        square.addEventListener('mousedown', (e) => {
            if (e.type === 'mouseover' && !mouseDown) return
            else square.classList.add('hovered');
        });
    
        // square.addEventListener('mouseout', () => {
        //     square.classList.remove('hovered');
        // })
    
        container.appendChild(square);
    }
}

function resetGrid() {
    const input = prompt('How many squares per side for the new grid? max: 100 squares');
    let newGridSize = parseInt(input);

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
