import React from 'react';
import Landing from './views/Landing';
import WeatherDisplay from './components/WeatherDisplay';

// The main component of the application.
// Contains the landing page and the weather display component.
function App() {
  return (
    <div className="App">
      <Landing />
      <WeatherDisplay />
    </div>
  );
}

export default App;
