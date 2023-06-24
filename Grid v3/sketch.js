
// REPURPOSE MINESWEEPER GAME FOR LAYOUT GENERATION

let grid;
let cols;
let rows;
let w = 40;
let h = 40;

let totalHeaders = 10;
let totalBody = 20;
let totalIllustration = 5;
let totalCaption = 10;


function make2DArray(cols, rows) {
  let arr = new Array(cols);
  for (var i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows);
  }
  return arr;
}

function setup() {
  createCanvas(401, 401);
  cols = floor(width / w);
  rows = floor(height / h);
  grid = make2DArray(cols, rows);

  // MAKE CELLS ----------------------

  for (var c = 0; c < cols; c++) {
    for (var r = 0; r < rows; r++) {
      grid[c][r] = new Cell(c, r, w, h);
    }
  }

  // 1. PICK HEADER SPOTS -------------------

  // An array of every free cell. 
  let options = [];

  for (var c = 0; c < cols; c++) {
    for (var r = 0; r < rows; r++) {
      options.push([c, r]);
    }
  }

  // HEADER PLACEMENT --------------------------

  for (let b = 0; b < totalHeaders; b++) {

    // Pick a random free cell

    // How do I pick a group of neighboring free cells at the same time?

    let freeCell = floor(random(options.length));

    let choice = options[freeCell];
    let bC = choice[0];
    let bR = choice[1];

    // deletes spot that is no longer free
    options.splice(freeCell, 1);

    grid[bC][bR].header = true;
  }

  // BODY PLACEMENT --------------------------

  for (let b = 0; b < totalBody; b++) {

    // Pick a random free cell
    let freeCell = floor(random(options.length));

    let choice = options[freeCell];
    let bC = choice[0];
    let bR = choice[1];

    // deletes spot that is no longer free
    options.splice(freeCell, 1);

    grid[bC][bR].body = true;
  }

  // ILLUSTRATION PLACEMENT --------------------------

  for (let b = 0; b < totalIllustration; b++) {

    // Pick a random free cell
    let freeCell = floor(random(options.length));

    let choice = options[freeCell];
    let bC = choice[0];
    let bR = choice[1];

    // deletes spot that is no longer free
    options.splice(freeCell, 1);

    grid[bC][bR].illustration = true;
  }

  // CAPTION PLACEMENT --------------------------

  for (let b = 0; b < totalCaption; b++) {

    // Pick a random free cell
    let freeCell = floor(random(options.length));

    let choice = options[freeCell];
    let bC = choice[0];
    let bR = choice[1];

    // deletes spot that is no longer free
    options.splice(freeCell, 1);

    grid[bC][bR].caption = true;
  }


}


function draw() {
  background(0);

  for (var c = 0; c < cols; c++) {
    for (var r = 0; r < rows; r++) {
      grid[c][r].show();
    }
  }
}

