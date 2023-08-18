import React from 'react';
import Cell from './Cell';

function GameGrid({ grid, onCellClick }) {
  return (
    <div className="game-grid">
      {grid.map((row, i) =>
        row.map((cell, j) => (
          <Cell key={`${i}-${j}`} state={cell.state} onClick={() => onCellClick(i, j)} />
        ))
      )}
    </div>
  );
}

export default GameGrid;
