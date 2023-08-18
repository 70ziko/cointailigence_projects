import React from 'react';
import getWeatherData from '../api/weatherAPI';
import renderWeatherData from '../services/weatherService';

class LocationSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: ''
    };

    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.searchLocation = this.searchLocation.bind(this);
  }

  handleLocationChange(event) {
    this.setState({location: event.target.value});
  }

  async searchLocation(event) {
    event.preventDefault();
    try {
      const weatherData = await getWeatherData(this.state.location);
      renderWeatherData(weatherData);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  }

  render() {
    return (
      <form onSubmit={this.searchLocation}>
        <input 
          type="text" 
          value={this.state.location} 
          onChange={this.handleLocationChange} 
          placeholder="Enter city name" 
        />
        <button type="submit">Search</button>
      </form>
    );
  }
}

export default LocationSearch;
