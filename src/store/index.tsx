import { CombinedState, combineReducers, Reducer } from "redux";
import cityWeatherInformation, {
  ActionType,
  ICityWeatherInformation,
} from "./reducers/cityWeatherInformation";

export interface RootState {
  cityWeatherInformation: ICityWeatherInformation;
}

const appReducers: Reducer<
  CombinedState<{ cityWeatherInformation: ICityWeatherInformation }>,
  { type: ActionType; payload: ICityWeatherInformation }
> = combineReducers({
  cityWeatherInformation,
});

export default appReducers;
