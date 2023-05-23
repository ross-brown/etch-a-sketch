const SIZE = 16;
let COLOR = "black";

const grid = document.querySelector(".grid");
const clearBtn = document.querySelector("#clear");
const changeBtn = document.querySelector("#change-size");
const currentSize = document.querySelector("#current-size");
const colorBtn = document.querySelector("#change-color");
const colorCircle = document.querySelector("#color");

function createGrid(size) {
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  currentSize.textContent = `Size: ${size} x ${size}`;

  for (let i = 1; i <= size * size; i++) {
    const gridElement = document.createElement("div");
    gridElement.classList.add("grid-square");
    grid.appendChild(gridElement);
  }
}

function onMouseHover(e) {
  if (e.target.className === "grid-square") {
    e.target.style.backgroundColor = COLOR;
  }
}

function clearGrid() {
  for (let i = 0; i < grid.children.length; i++) {
    const currentSquare = grid.children[i];
    currentSquare.style.backgroundColor = "whitesmoke";
  }
  resetColor();
}

function changeSize() {
  const newSize = prompt("How many squares per side would you like?");
  if (+newSize > 100 || +newSize < 4) {
    alert("Cannot exceed 100 x 100 or be less than 4x4");
  } else {
    clearGrid();
    createGrid(+newSize);
  }
}

function changeColor() {
  const newColor = prompt("What color would you like to use?");
  COLOR = newColor.toLowerCase().replace(/\s+/g, '');
  colorCircle.style.backgroundColor = COLOR;
}

function resetColor() {
  COLOR = "black";
  colorCircle.style.backgroundColor = COLOR;
}

grid.addEventListener("mouseover", onMouseHover);
clearBtn.addEventListener("click", clearGrid);
changeBtn.addEventListener("click", changeSize);
colorBtn.addEventListener("click", changeColor);

createGrid(SIZE);
