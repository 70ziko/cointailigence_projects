import React, { Component } from 'react';

class WeatherDisplay extends Component {
    renderWeatherData() {
        const { weatherData } = this.props;
        return (
            <div>
                <h2>{weatherData.location.name}</h2>
                <p>{weatherData.current.condition.text}</p>
                <p>{weatherData.current.temp_c}°C</p>
            </div>
        );
    }

    renderForecastData() {
        const { forecastData } = this.props;
        return forecastData.map((forecast, index) => (
            <div key={index}>
                <h3>{forecast.date}</h3>
                <p>{forecast.day.condition.text}</p>
                <p>{forecast.day.avgtemp_c}°C</p>
            </div>
        ));
    }

    render() {
        return (
            <div>
                {this.renderWeatherData()}
                {this.renderForecastData()}
            </div>
        );
    }
}

export default WeatherDisplay;
