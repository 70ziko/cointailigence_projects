import React from 'react';
import Cell from './Cell.jsx';

const Grid = ({ grid }) => (
  <div className="grid">
    {grid.map((row, i) =>
      row.map((cell, j) => <Cell key={`${i}-${j}`} state={cell} />)
    )}
  </div>
);

export default Grid;
