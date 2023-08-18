import React, { useState } from 'react';
import WeatherMap from './components/WeatherMap';
import WeatherData from './components/WeatherData';
import SearchBar from './components/SearchBar';

const App = () => {
  // Initialize state for current location
  const [currentLocation, setCurrentLocation] = useState(null);

  return (
    <div>
      <SearchBar onSearch={setCurrentLocation} />
      <WeatherMap location={currentLocation} onLocationChange={setCurrentLocation} />
      {currentLocation && <WeatherData location={currentLocation} />}
    </div>
  );
};

export default App;
