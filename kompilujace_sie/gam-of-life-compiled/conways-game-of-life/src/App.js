import React, { useState, useEffect } from 'react';
import GameGrid from './components/GameGrid';
import './style.css';

const App = () => {
    const [isRunning, setIsRunning] = useState(false);
    const [grid, setGrid] = useState(() => {
        let newGrid = [];
        for (let i = 0; i < 20; i++) {
            let row = [];
            for (let j = 0; j < 20; j++) {
                row.push(false);
            }
            newGrid.push(row);
        }
        return newGrid;
    });

    const startStopGame = () => {
        setIsRunning(!isRunning);
    };

    const resetGame = () => {
        setGrid(prevGrid => {
            let newGrid = prevGrid.map(row => row.map(() => false));
            return newGrid;
        });
    };

    useEffect(() => {
        if (isRunning) {
            const interval = setInterval(() => {
                setGrid(prevGrid => {
                    let newGrid = prevGrid.map((row, i) => row.map((cell, j) => {
                        const neighbors = [
                            prevGrid[i - 1]?.[j - 1] || false,
                            prevGrid[i - 1]?.[j] || false,
                            prevGrid[i - 1]?.[j + 1] || false,
                            prevGrid[i]?.[j - 1] || false,
                            prevGrid[i]?.[j + 1] || false,
                            prevGrid[i + 1]?.[j - 1] || false,
                            prevGrid[i + 1]?.[j] || false,
                            prevGrid[i + 1]?.[j + 1] || false
                        ].filter(Boolean).length;

                        if (cell && (neighbors < 2 || neighbors > 3)) {
                            return false;
                        } else if (!cell && neighbors === 3) {
                            return true;
                        }
                        return cell;
                    }));
                    return newGrid;
                });
            }, 1000);
            return () => clearInterval(interval);
        }
    }, [isRunning]);

    return (
        <div className="app">
            <GameGrid grid={grid} setGrid={setGrid} isRunning={isRunning} />
            <div className="controls">
                <button onClick={startStopGame}>{isRunning ? 'Stop' : 'Start'}</button>
                <button onClick={resetGame}>Reset</button>
            </div>
        </div>
    );
};

export default App;
