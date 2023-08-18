import React, { Component } from 'react';
import WeatherDisplay from './WeatherDisplay';
import SearchBar from './SearchBar';
import weatherService from '../../services/weatherService';

class Weather extends Component {
    constructor() {
        super();
        this.state = {
            weatherData: {},
            forecastData: {}
        };
    }

    componentDidMount() {
        this.fetchWeatherData();
        this.fetchForecastData();
    }

    fetchWeatherData = async () => {
        const weatherData = await weatherService.updateWeather();
        this.setState({ weatherData });
    }

    fetchForecastData = async () => {
        const forecastData = await weatherService.forecastWeather();
        this.setState({ forecastData });
    }

    handleSearch = (location) => {
        this.fetchWeatherData(location);
        this.fetchForecastData(location);
    }

    render() {
        const { weatherData, forecastData } = this.state;
        return (
            <div>
                <SearchBar onSearch={this.handleSearch} />
                <WeatherDisplay weatherData={weatherData} forecastData={forecastData} />
            </div>
        );
    }
}

export default Weather;
