import React, { Component } from 'react';

class Food extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: [0, 0],
    };
  }

  generateFood = () => {
    let newPosition = [
      Math.floor(Math.random() * this.props.gameAreaSize[0]),
      Math.floor(Math.random() * this.props.gameAreaSize[1]),
    ];
    this.setState({ position: newPosition });
  }

  renderFood = () => {
    const style = {
      left: `${this.state.position[0]}%`,
      top: `${this.state.position[1]}%`
    }

    return <div className="food-dot" style={style}></div>
  }

  render() {
    return (
      <div>
        {this.renderFood()}
      </div>
    );
  }
}

export default Food;
