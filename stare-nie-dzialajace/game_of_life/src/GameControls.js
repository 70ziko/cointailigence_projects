import React from 'react';

const GameControls = ({ startGame, pauseGame, resetGame }) => {
  return (
    <div>
      <button onClick={startGame}>Start</button>
      <button onClick={pauseGame}>Pause</button>
      <button onClick={resetGame}>Reset</button>
    </div>
  );
};

export default GameControls;
