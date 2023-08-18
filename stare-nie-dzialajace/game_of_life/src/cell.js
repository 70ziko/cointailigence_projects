class Cell {
  constructor(state = 'dead') {
    this.state = state;
  }

  toggleState() {
    this.state = this.state === 'dead' ? 'alive' : 'dead';
  }

  determineNextState(neighbors) {
    const aliveNeighbors = neighbors.filter(neighbor => neighbor.state === 'alive').length;

    if (this.state === 'alive' && (aliveNeighbors < 2 || aliveNeighbors > 3)) {
      return 'dead';
    }
    else if (this.state === 'dead' && aliveNeighbors === 3) {
      return 'alive';
    }
    else {
      return this.state;
    }
  }
}

module.exports = Cell;
