import React, { Component } from 'react';
import Game from './components/Game';
import Score from './components/Score';
import GameOver from './components/GameOver';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameOver: false,
    };
  }

  handleGameOver = () => {
    this.setState({ gameOver: true });
  }

  render() {
    return (
      <div className="App">
        <Score />
        {this.state.gameOver ? <GameOver /> : <Game handleGameOver={this.handleGameOver} />}
      </div>
    );
  }
}

export default App;
