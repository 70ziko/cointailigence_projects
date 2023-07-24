import React from 'react';
import PropTypes from 'prop-types';

const Controls = ({ gameStatus, pause, resume, reset, changeSpeed }) => {
    return (
        <div className="Controls">
            <button onClick={pause} disabled={gameStatus === 'paused'}>Pause</button>
            <button onClick={resume} disabled={gameStatus === 'running'}>Resume</button>
            <button onClick={reset}>Reset</button>
            <input type="range" min="100" max="2000" step="100" onChange={(e) => changeSpeed(e.target.value)} />
        </div>
    );
};

Controls.propTypes = {
    gameStatus: PropTypes.string.isRequired,
    pause: PropTypes.func.isRequired,
    resume: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired,
    changeSpeed: PropTypes.func.isRequired,
};

export default Controls;
