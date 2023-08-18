class WeatherService {

  const API_KEY = 'your_api_key_here';
  const BASE_URL = 'http://api.openweathermap.org/data/2.5';

  getCurrentWeather(location) {
    const url = `${BASE_URL}/weather?q=${location}&appid=${API_KEY}`;
    return fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Unable to fetch weather data. HTTP error! status: ${response.status}`);
        }
        return response.json();
      });
  }

  getSevenDayForecast(location) {
    const url = `${BASE_URL}/forecast/daily?q=${location}&cnt=7&appid=${API_KEY}`;
    return fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Unable to fetch forecast data. HTTP error! status: ${response.status}`);
        }
        return response.json();
      });
  }

}

export default WeatherService;
