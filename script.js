const DEFAULT_VALUE = 16;
const DEFAULT_COLOR = "#fff";

let currentSize = DEFAULT_VALUE;
let currentColor = DEFAULT_COLOR;

let myGrid = document.querySelector(".grid");
let rows = document.getElementsByClassName("rows");
let cols = document.getElementsByClassName("cols");

function setSize(newSize) {
  currentSize = newSize;
}

function setCurrentColor(newColor) {
  currentColor = newColor;
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
      col.addEventListener("mousedown", changeColor);
      col.addEventListener("mouseover", changeColor);
      rows[j].appendChild(col);
    }
  }
}

let colorPicker = document.getElementById("colorPicker");
let clearBtn = document.getElementById("clearBtn");
let sizeSlider = document.getElementById("sizeSlider");
let sizeValue = document.getElementById("sizeValue");

sizeSlider.onmousemove = (e) => updateSizeValue(e.target.value);
sizeSlider.onchange = (e) => changeSize(e.target.value);
clearBtn.onclick = () => reloadGrid();
colorPicker.oninput = (e) => setCurrentColor(e.target.value);

function updateSizeValue(value) {
  sizeValue.innerHTML = `${value} X ${value}`;
}

function changeSize(value) {
  setSize(value);
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

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

function changeColor(e) {
  if ((e.type = "mouseover" && !mouseDown)) return;

  if ((e.type = "mouseover" && mouseDown)) {
    e.target.style.backgroundColor = currentColor;
  }
}

window.onload = () => changeSize(DEFAULT_VALUE);
