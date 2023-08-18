import React, { useState } from 'react';
import LocationSearch from '../components/LocationSearch';
import WeatherDisplay from '../components/WeatherDisplay';

const Landing = () => {
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const handleSearch = (location) => {
    setLocation(location);

    const URL = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=b1b35bba8b434a28a0be2a3e1071ae5b&units=metric`;

    fetch(URL)
      .then(res => res.json())
      .then(json => {
        setWeatherData(json);
      });
  }

  return (
    <div className="App">
      <h1>Weather App</h1>
      <LocationSearch onSearch={handleSearch} />
      {weatherData && (
        <WeatherDisplay city={location} />
      )}
    </div>
  );
}

export default Landing;
