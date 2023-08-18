const Cell = require('./cell');

class Grid {
  constructor(size) {
    this.size = size;
    this.grid = this.createGrid();
  }

  createGrid() {
    let grid = new Array(this.size);
    for (let i = 0; i < this.size; i++) {
      grid[i] = new Array(this.size);
      for (let j = 0; j < this.size; j++) {
        grid[i][j] = new Cell();
      }
    }
    return grid;
  }

  getNeighbors(i, j) {
    let neighbors = [];
    for (let x = Math.max(0, i - 1); x <= Math.min(i + 1, this.size - 1); x++) {
      for (let y = Math.max(0, j - 1); y <= Math.min(j + 1, this.size - 1); y++) {
        if (x !== i || y !== j) {
          neighbors.push(this.grid[x][y]);
        }
      }
    }
    return neighbors;
  }

  updateGrid() {
    let newGrid = this.createGrid();
    for (let i = 0; i < this.size; i++) {
      for (let j = 0; j < this.size; j++) {
        let neighbors = this.getNeighbors(i, j);
        let nextState = this.grid[i][j].determineNextState(neighbors);
        newGrid[i][j] = new Cell(nextState);
      }
    }
    this.grid = newGrid;
  }
}

module.exports = Grid;
