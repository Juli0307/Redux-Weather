import axios from "axios";

export interface IWeatherInformation {
  data: {
    name: string;
    main: {
      temp_max: number;
      temp_min: number;
      temp: number;
    };
    weather: {
      description: string;
    }[];
  };
}

const appKey = "57c58e149533ed397565c615f1b20806";

export const WeatherService = { getWeatherInformation };

function getWeatherInformation(lat: number | string, lon: number | string) {
  return axios.get<IWeatherInformation, IWeatherInformation>(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appKey}`
  );
}
