import React from 'react';

const Cell = ({ cellState, toggleCell, x, y }) => {
    return (
        <div 
            className={`Cell ${cellState ? 'alive' : 'dead'}`}
            onClick={() => toggleCell(x, y)}
        />
    );
};

export default Cell;
