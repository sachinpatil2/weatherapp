// import the interface
import { Weatheritem } from "../models/weather.model";
import { WeatherAction, WeatherActionType } from "../actions/weather.action";
//create a dummy initial state
const initialState: Array<Weatheritem> = [
  {
    city: "Pune",
  },
];
export function weatherReducer(
  state: Array<Weatheritem> = initialState,
  action: WeatherAction
) {
  switch (action.type) {
    case WeatherActionType.ADD_ITEM:
      return [...state, action.payload];
    default:
      return state;
  }
}
