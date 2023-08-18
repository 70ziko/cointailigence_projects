import React from 'react';
import classNames from 'classnames';

const Cell = ({ isAlive, id, toggleCellState }) => {
    const cellClass = classNames({
        'cell': true,
        'alive': isAlive,
        'dead': !isAlive
    });

    return <div className={cellClass} onClick={() => toggleCellState(id)}></div>;
};

export default Cell;
