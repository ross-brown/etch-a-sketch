const SIZE = 16;

const grid = document.querySelector(".grid");
const clearBtn = document.querySelector("#clear");
const changeBtn = document.querySelector("#change-size");

function createGrid(size) {
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 1; i <= size * size; i++) {
    const gridElement = document.createElement("div");
    gridElement.classList.add("grid-square");
    grid.appendChild(gridElement);
  }
}

function onMouseHover(e) {
  if (e.target.className === "grid-square") {
    e.target.style.backgroundColor = "black";
  }
}

function clearGrid() {
  for (let i = 0; i < grid.children.length; i++) {
    const currentSquare = grid.children[i];
    currentSquare.style.backgroundColor = "white";
  }
}

function changeSize() {
  const newSize = prompt("How many squares per side would you like?");
  if (+newSize > 100) {
    alert('Cannot exceed 100 x 100')
  } else {
    clearGrid();
    createGrid(+newSize);
  }
}

grid.addEventListener("mouseover", onMouseHover);
clearBtn.addEventListener("click", clearGrid);
changeBtn.addEventListener("click", changeSize);

createGrid(SIZE);
