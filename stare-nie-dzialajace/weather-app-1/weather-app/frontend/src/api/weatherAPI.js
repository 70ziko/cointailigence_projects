const getWeatherData = async (location) => {
  const API_KEY = 'your_api_key';
  const URL = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`;

  const response = await fetch(URL);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  
  const data = await response.json();
  return data;
}

export default getWeatherData;
