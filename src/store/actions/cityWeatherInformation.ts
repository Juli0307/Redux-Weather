import { ICityWeatherInformation } from "../reducers/cityWeatherInformation";

export const setCityWeatherInformation = (
  cityWeatherInformation: ICityWeatherInformation
) => ({
  type: "SET_CITY_WEATHER_INFORMATION",
  payload: { ...cityWeatherInformation, loading: false },
});
