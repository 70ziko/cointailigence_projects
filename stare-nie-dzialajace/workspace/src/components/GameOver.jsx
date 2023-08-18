import React, { Component } from 'react';

class GameOver extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameOver: false,
      finalScore: 0,
    };
  }

  gameOver = (score) => {
    this.setState({
      gameOver: true,
      finalScore: score
    });
  }

  render() {
    if (this.state.gameOver) {
      return (
        <div className="game-over">
          <h1>Game Over</h1>
          <p>Your final score is: {this.state.finalScore}</p>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default GameOver;
