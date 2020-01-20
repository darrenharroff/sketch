const mainContent = document.querySelector(".main-content");
const resetBtn = document.querySelector(".reset");
const grid = document.createElement("div");
grid.classList.add("grid");
mainContent.appendChild(grid);

createGridCells = number => {
  grid.style.gridTemplateColumns = `repeat(${number},1fr)`;

  for (i = 0; i < number * number; i++) {
    const gridCell = document.createElement("div");
    gridCell.className = "grid_cell";
    grid.appendChild(gridCell);
  }
  let gridCells = document.querySelectorAll(".grid_cell");
  gridCells.forEach(cell => {
    cell.addEventListener("mouseover", () => {
      // cell.classList.add("hovered");
      // cell.style.backgroundColor = `rgb(${Math.floor(
      //   Math.random() * 255
      // )},${Math.floor(Math.random() * 255)},${Math.floor(
      //   Math.random() * 255
      // )})`;
      if (cell.className === "grid_cell") {
        cell.classList.add("hovered1");
      } else if (cell.classList.contains(`hovered1`)) {
        cell.classList.remove(`hovered1`);
        cell.classList.add(`hovered2`);
      } else if (cell.classList.contains(`hovered2`)) {
        cell.classList.remove(`hovered2`);
        cell.classList.add(`hovered3`);
      } else if (cell.classList.contains(`hovered3`)) {
        cell.classList.remove(`hovered3`);
        cell.classList.add(`hovered4`);
      } else if (cell.classList.contains(`hovered4`)) {
        cell.classList.remove(`hovered4`);
        cell.classList.add(`hovered5`);
      } else if (cell.classList.contains(`hovered5`)) {
        cell.classList.remove(`hovered5`);
        cell.classList.add(`hovered6`);
      } else if (cell.classList.contains(`hovered6`)) {
        cell.classList.remove(`hovered6`);
        cell.classList.add(`hovered7`);
      } else if (cell.classList.contains(`hovered7`)) {
        cell.classList.remove(`hovered7`);
        cell.classList.add(`hovered8`);
      } else if (cell.classList.contains(`hovered8`)) {
        cell.classList.remove(`hovered8`);
        cell.classList.add(`hovered9`);
      } else if (cell.classList.contains(`hovered9`)) {
        cell.classList.remove(`hovered9`);
        cell.classList.add(`hovered10`);
      }
    });
  });
};

createGridCells(prompt("How big do you want the grid? (integers)"));

resetBtn.addEventListener("click", () => {
  let gridCells = document.querySelectorAll(".grid_cell");
  gridCells.forEach(cell => {
    grid.removeChild(cell);
  });
  createGridCells(prompt("New width?"));
});
