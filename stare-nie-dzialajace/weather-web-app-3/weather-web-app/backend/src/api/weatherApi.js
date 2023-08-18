const axios = require('axios');
require('dotenv').config();

class WeatherData {
    constructor() {
        this.baseURL = 'http://api.weatherapi.com/v1';
        this.apiKey = process.env.WEATHER_API_KEY;
    }

    async fetchWeatherData(location) {
        try {
            const response = await axios.get(`${this.baseURL}/current.json?key=${this.apiKey}&q=${location}`);
            return response.data;
        } catch (error) {
            console.error(`Error fetching weather data: ${error}`);
        }
    }
}

class UserData {
    constructor() {
        this.geoLocationURL = 'http://api.ipstack.com';
        this.geoLocationKey = process.env.GEOLOCATION_API_KEY;
    }

    async getUserLocation() {
        try {
            const response = await axios.get(`${this.geoLocationURL}/check?access_key=${this.geoLocationKey}`);
            return response.data;
        } catch (error) {
            console.error(`Error fetching user location: ${error}`);
        }
    }
}

module.exports = { WeatherData, UserData };
