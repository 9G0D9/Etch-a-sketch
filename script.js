let myGrid = document.querySelector(".grid");
let rows = document.getElementsByClassName("rows");
let cols = document.getElementsByClassName("cols");

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

makeRow(16);
makeCol(16);

console.log(rows.length);
console.log(cols.length);
