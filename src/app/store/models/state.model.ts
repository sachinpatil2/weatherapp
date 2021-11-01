import { Weatheritem } from "./weather.model";

export interface State {
  readonly weather: Array<Weatheritem>;
}
