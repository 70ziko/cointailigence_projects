import React from 'react';
import Cell from './Cell';

class GameGrid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            grid: this.initializeGrid()
        };
    }

    initializeGrid() {
        let grid = [];
        for (let i = 0; i < 20; i++) {
            let row = [];
            for (let j = 0; j < 20; j++) {
                row.push(false);
            }
            grid.push(row);
        }
        return grid;
    }

    toggleCellState = (row, col) => {
        this.setState(prevState => {
            let grid = prevState.grid.slice();
            grid[row][col] = !grid[row][col];
            return {grid};
        });
    }

    countLiveNeighbors = (row, col) => {
        const directions = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];
        return directions.reduce((count, [dx, dy]) => {
            const newRow = row + dx;
            const newCol = col + dy;
            if (newRow >= 0 && newRow < 20 && newCol >= 0 && newCol < 20 && this.state.grid[newRow][newCol]) {
                count++;
            }
            return count;
        }, 0);
    }

    generateNextGeneration = () => {
        this.setState(prevState => {
            let newGrid = prevState.grid.map((row, i) => row.map((isAlive, j) => {
                const liveNeighbors = this.countLiveNeighbors(i, j);
                if (isAlive && (liveNeighbors < 2 || liveNeighbors > 3)) {
                    return false;
                } else if (!isAlive && liveNeighbors === 3) {
                    return true;
                }
                return isAlive;
            }));
            return {grid: newGrid};
        });
    }

    render() {
        return (
            <div className="grid">
                {this.state.grid.map((row, i) => (
                    <div key={i} className="row">
                        {row.map((isAlive, j) => (
                            <Cell key={j} isAlive={isAlive} toggleCellState={() => this.toggleCellState(i, j)} />
                        ))}
                    </div>
                ))}
                <button onClick={this.generateNextGeneration}>Next Generation</button>
            </div>
        );
    }
}

export default GameGrid;
