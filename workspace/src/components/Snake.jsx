import React, { Component } from 'react';

class Snake extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: [0, 0],
      direction: 'RIGHT',
      size: 1,
    };
  }

  move = () => {
    let newPosition = [...this.state.position];
    switch (this.state.direction) {
      case 'UP':
        newPosition[1]--;
        break;
      case 'DOWN':
        newPosition[1]++;
        break;
      case 'LEFT':
        newPosition[0]--;
        break;
      case 'RIGHT':
        newPosition[0]++;
        break;
      default:
        break;
    }
    this.setState({ position: newPosition });
  }

  grow = () => {
    this.setState(prevState => ({ size: prevState.size + 1 }));
  }

  checkCollision = () => {
    // Check for collision with game boundaries
    if (
      this.state.position[0] < 0 ||
      this.state.position[1] < 0 ||
      this.state.position[0] >= this.props.gameAreaSize[0] ||
      this.state.position[1] >= this.props.gameAreaSize[1]
    ) {
      return true;
    }

    // Check for collision with self
    // Note: This is a simplified check and assumes the snake's position array is a record of its body positions
    if (this.state.position.slice(1).includes(this.state.position[0])) {
      return true;
    }

    return false;
  }

  renderSnake = () => {
    let snakeArray = [];
    for(let i=0; i<this.state.size; i++) {
      snakeArray.push(<div key={i} className="snake-body-part" style={{ top: this.state.position[1], left: this.state.position[0] }} />);
    }
    return snakeArray;
  }

  render() {
    return (
      <div className="snake">
        {this.renderSnake()}
      </div>
    );
  }
}

export default Snake;
