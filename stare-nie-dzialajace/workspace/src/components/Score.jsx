import React, { Component } from 'react';

class Score extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
    };
  }

  updateScore = () => {
    this.setState(prevState => {
      return {score: prevState.score + 1};
    });
  }

  render() {
    return (
      <div className="score">
        Score: {this.state.score}
      </div>
    );
  }
}

export default Score;
