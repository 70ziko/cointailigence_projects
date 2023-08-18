import React from 'react';
import ReactDOM from 'react-dom';
import WeatherDisplay from '../components/WeatherDisplay';

const renderWeatherData = (weatherData) => {
  ReactDOM.render(
    <React.StrictMode>
      <WeatherDisplay weatherData={weatherData} />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

export default renderWeatherData;
