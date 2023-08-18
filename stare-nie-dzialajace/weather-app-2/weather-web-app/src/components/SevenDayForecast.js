import React from 'react';

class SevenDayForecast extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      forecastData: null
    };
  }

  updateForecast(forecastData) {
    this.setState({ forecastData: forecastData });
  }

  render() {
    if (!this.state.forecastData) {
      return <div>Loading...</div>;
    }

    const forecast = this.state.forecastData;
    return (
      <div>
        <h2>Seven Day Forecast</h2>
        {forecast.list.map((day, index) => (
          <div key={index}>
            <p>{new Date(day.dt * 1000).toLocaleDateString()}</p>
            <p>{day.temp.day}°C</p>
            <p>{day.weather[0].description}</p>
          </div>
        ))}
      </div>
    );
  }

}

export default SevenDayForecast;
