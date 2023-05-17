const size = 16;

const grid = document.querySelector(".grid");

function createGrid(size) {
  for (let i = 1; i <= size ** 2; i++) {
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

grid.addEventListener("mouseover", onMouseHover);

createGrid(size);
