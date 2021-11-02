import * as weatherActions from "../actions/weather.action";
import { State } from "../models/state.model";
//create a dummy initial state
const initialState: State = {
  weather: {
    city: "",
    feels_like: "",
    desc: "",
    temp: "",
    image: "",
  },
};

export function weatherReducer(
  state: State = initialState,
  action: weatherActions.WeatherActions
) {
  switch (action.type) {
    case weatherActions.FETCH_WEATHER: {
      console.log("From Reducer Action Fetch");
      return {
        ...state,
        loading: true,
      };
    }
    case weatherActions.FETCH_WEATHER_SUCCESS: {
      console.log("From Reducer Action Success", action.payload);
      const data = action.payload;

      return {
        ...state,
        city: data.name,
        feels_like: data.main.feels_like,
        desc: data.weather[0].description,
        temp: data.main.temp,
        image: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
      };
    }
    case weatherActions.FETCH_WEATHER_FAIL: {
      console.log("From Reducer Action Fail", action.payload);
      const data = action.payload;
      return {
        ...state,
        data,
      };
    }
  }
}
