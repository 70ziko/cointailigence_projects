import React from 'react';
import CurrentWeather from './components/CurrentWeather';
import SevenDayForecast from './components/SevenDayForecast';
import LocationSearch from './components/LocationSearch';
import WeatherService from './services/WeatherService';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentLocation: '',
      currentWeather: null,
      sevenDayForecast: null,
      favoriteLocations: [],
      error: null
    };
    this.weatherService = new WeatherService();
  }

  handleLocationSelect(location) {
    this.setState({ currentLocation: location });
    this.weatherService.getCurrentWeather(location)
      .then(weather => {
        this.setState({ currentWeather: weather, error: null });
      })
      .catch(error => {
        this.setState({ error: error.message });
      });
    this.weatherService.getSevenDayForecast(location)
      .then(forecast => {
        this.setState({ sevenDayForecast: forecast, error: null });
      })
      .catch(error => {
        this.setState({ error: error.message });
      });
  }

  render() {
    return (
      <div className="App">
        <h1>Weather Web App</h1>
        <LocationSearch onLocationSelect={this.handleLocationSelect.bind(this)} />
        {this.state.error && <div className="Error">{this.state.error}</div>}
        <CurrentWeather weatherData={this.state.currentWeather} />
        <SevenDayForecast forecastData={this.state.sevenDayForecast} />
      </div>
    );
  }

}

export default App;
