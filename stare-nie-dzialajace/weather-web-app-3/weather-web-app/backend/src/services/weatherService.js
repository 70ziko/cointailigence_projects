// ... other code ...

async forecastWeather() {
    try {
        const location = await this.userData.getUserLocation();
        const forecastData = await this.weatherData.fetchWeatherData(location, 7);
        if (!forecastData || forecastData.length !== 7) {
            throw new Error('Forecast data not found');
        }
        return forecastData;
    } catch (error) {
        console.error(`Error fetching weather forecast: ${error}`);
        throw error;
    }
}

// ... other code ...
