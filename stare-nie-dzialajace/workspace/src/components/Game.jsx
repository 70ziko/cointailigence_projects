import React, { Component } from 'react';
import Snake from './Snake';
import Food from './Food';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameAreaSize: [500, 500],
      snake: [],
      food: null,
    };
  }

  // Other game methods...

  renderGameArea = () => {
    return (
      <div className="game-area" style={{ width: this.state.gameAreaSize[0], height: this.state.gameAreaSize[1] }}>
        <Snake position={this.state.snake} />
        <Food gameAreaSize={this.state.gameAreaSize} />
      </div>
    );
  }

  render() {
    return (
      <div className="game">
        {this.renderGameArea()}
        {/* Other game elements... */}
      </div>
    );
  }
}

export default Game;
