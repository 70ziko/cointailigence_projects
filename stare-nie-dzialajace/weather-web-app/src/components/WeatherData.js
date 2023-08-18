import React from 'react';

class WeatherData extends React.Component {
  constructor(props) {
    super(props);
    this.apiKey = 'your-openweathermap-api-key';
  }

  getCurrentWeather(location) {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${this.apiKey}`;
    return fetch(url)
      .then(response => response.json())
      .then(data => {
        return {
          temperature: data.main.temp,
          humidity: data.main.humidity,
          windSpeed: data.wind.speed,
          description: data.weather[0].description
        };
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

  getForecast(location) {
    const url = `http://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${this.apiKey}`;
    return fetch(url)
      .then(response => response.json())
      .then(data => {
        return data.list.map(item => ({
          date: item.dt_txt,
          temperature: item.main.temp,
          humidity: item.main.humidity,
          windSpeed: item.wind.speed,
          description: item.weather[0].description
        }));
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

  render() {
    return null;
  }
}

export default WeatherData;
