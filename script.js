const DEFAULT_VALUE = 16;

let currentSize = DEFAULT_VALUE;

let myGrid = document.querySelector(".grid");
let rows = document.getElementsByClassName("rows");
let cols = document.getElementsByClassName("cols");

function setCurrentSize(newSize) {
  currentSize = newSize;
}

function makeRow(rowNum) {
  for (let i = 0; i < rowNum; i++) {
    let row = document.createElement("div");
    row.classList.add("rows");
    myGrid.appendChild(row);
  }
}

function makeCol(colNum) {
  for (let i = 0; i < rows.length; i++) {
    for (let j = 0; j < colNum; j++) {
      let col = document.createElement("div");
      col.classList.add("cols");
      rows[j].appendChild(col);
    }
  }
}

let sizeSlider = document.getElementById("sizeSlider");
let sizeValue = document.getElementById("sizeValue");
let clearBtn = document.getElementById("clearBtn");

sizeSlider.onmousemove = (e) => updateSizeValue(e.target.value);
sizeSlider.onchange = (e) => changeSize(e.target.value);
clearBtn.onclick = () => reloadGrid();

function updateSizeValue(value) {
  sizeValue.innerHTML = `${value} X ${value}`;
}

function changeSize(value) {
  setCurrentSize(value);
  reloadGrid(currentSize);
}

function reloadGrid() {
  clearGrid();
  creategrid(currentSize);
}

function creategrid(value = currentSize) {
  makeRow(value);
  makeCol(value);
}

function clearGrid() {
  myGrid.innerHTML = "";
}



window.onload = () => changeSize(DEFAULT_VALUE);
