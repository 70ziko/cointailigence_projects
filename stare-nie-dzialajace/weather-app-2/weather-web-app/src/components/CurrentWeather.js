import React from 'react';

class CurrentWeather extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      weatherData: null
    };
  }

  updateWeather(weatherData) {
    this.setState({ weatherData: weatherData });
  }

  render() {
    if (!this.state.weatherData) {
      return <div>Loading...</div>;
    }

    const weather = this.state.weatherData;
    return (
      <div>
        <h2>Current Weather</h2>
        <p>{weather.name}</p>
        <p>{weather.main.temp}°C</p>
        <p>{weather.weather[0].description}</p>
      </div>
    );
  }

}

export default CurrentWeather;
