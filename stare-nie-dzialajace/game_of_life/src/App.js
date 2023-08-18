import React, { useState, useEffect } from 'react';
import GameGrid from './GameGrid';
import GameControls from './GameControls';
import Cell from './Cell';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grid: this.initializeGrid(),
      isRunning: false
    };
  }

  initializeGrid() {
    const grid = [];
    for (let i = 0; i < 20; i++) {
      const row = [];
      for (let j = 0; j < 20; j++) {
        row.push(new Cell());
      }
      grid.push(row);
    }
    return grid;
  }

  handleStart = () => {
    this.setState({ isRunning: true });
  }

  handleStop = () => {
    this.setState({ isRunning: false });
  }

  handleClear = () => {
    this.setState({ grid: this.initializeGrid() });
  }

  render() {
    return (
      <div>
        <GameGrid grid={this.state.grid} />
        <GameControls 
          isRunning={this.state.isRunning} 
          onStart={this.handleStart} 
          onStop={this.handleStop} 
          onClear={this.handleClear} 
        />
      </div>
    );
  }
}

export default App;
