const API_KEY = "dab1f1581d83dd75322c23948640d7a1";
const API_URL = `https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&units=Metric&lang=ru`;

export const getWeather = async (city, state) => {
  const response = await fetch(`${API_URL}&q=${city},${state}`);
  const json = await response.json();
  
  return {
    weatherMetadata: json.weather[0],
    temperature: json.main.temp
  };
};

const openWeatherMapApi = {
  getWeather
};

export default openWeatherMapApi;
