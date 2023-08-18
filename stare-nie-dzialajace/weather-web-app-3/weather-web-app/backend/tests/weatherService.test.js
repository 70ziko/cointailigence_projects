const WeatherService = require('../src/services/weatherService');

describe('Weather Service', () => {
    let weatherService;

    beforeEach(() => {
        weatherService = new WeatherService();
    });

    it('should update weather in real time', async () => {
        const weatherData = await weatherService.updateWeather();
        expect(weatherData).toHaveProperty('location');
        expect(weatherData).toHaveProperty('current');
    });

    it('should provide a 7-day weather forecast', async () => {
        const forecastData = await weatherService.forecastWeather();
        expect(forecastData).toHaveLength(7);
    });
});
