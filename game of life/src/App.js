import React, { useState, useEffect } from 'react';
import Grid from './components/Grid.jsx';
import Controls from './components/Controls.jsx';

const App = () => {
    const [grid, setGrid] = useState([]);
    const [gameStatus, setGameStatus] = useState('paused');
    const [speed, setSpeed] = useState(1000);
    const [intervalId, setIntervalId] = useState(null);

    const updateGrid = () => {
        // Existing code...
    };

    const pause = () => {
        clearInterval(intervalId);
        setGameStatus('paused');
    };

    const resume = () => {
        const id = setInterval(updateGrid, speed);
        setIntervalId(id);
        setGameStatus('running');
    };

    const reset = () => {
        clearInterval(intervalId);
        setGrid([]); // Or set to initial grid state
        setGameStatus('paused');
    };

    const changeSpeed = (newSpeed) => {
        setSpeed(newSpeed);
    };

    const toggleCell = (x, y) => {
        setGrid(prevGrid => {
            const newGrid = JSON.parse(JSON.stringify(prevGrid));
            newGrid[y][x] = !newGrid[y][x];
            return newGrid;
        });
    };

    useEffect(() => {
        if (gameStatus === 'running' && !intervalId) {
            resume();
        } else if (gameStatus === 'paused' && intervalId) {
            pause();
        }
    }, [gameStatus]);

    useEffect(() => {
        if (gameStatus === 'running') {
            clearInterval(intervalId);
            resume();
        }
    }, [speed]);

    return (
        <div>
            <Grid grid={grid} toggleCell={toggleCell} />
            <Controls gameStatus={gameStatus} pause={pause} resume={resume} reset={reset} changeSpeed={changeSpeed} />
        </div>
    );
};

export default App;
