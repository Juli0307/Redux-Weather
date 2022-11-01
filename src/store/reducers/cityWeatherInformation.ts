export interface ICityWeatherInformation {
  city: string;
  currentTemperature: number;
  min: number;
  max: number;
  weather: {
    description: string;
  }[];
}

const INITIAL_STATE = {
  currentTemperature: 0,
  city: "",
  max: 0,
  min: 0,
  weather: [],
};

export type ActionType =
  | "SET_CITY_WEATHER_INFORMATION"
  | "DELETE_CITY_WEATHER_INFORMATION";

const cityWeatherInformation = (
  state: ICityWeatherInformation = INITIAL_STATE,
  action: { type: ActionType; payload: ICityWeatherInformation }
) => {
  switch (action.type) {
    case "SET_CITY_WEATHER_INFORMATION":
      return action.payload;
    default:
      return state;
  }
};

export default cityWeatherInformation;
