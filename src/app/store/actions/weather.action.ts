import { Action } from "@ngrx/store";
import { Weatheritem } from "../models//weather.model";
export enum WeatherActionType {
  ADD_ITEM = "[COURSE] Add City",
}
export class AddItemAction implements Action {
  readonly type = WeatherActionType.ADD_ITEM;
  //add an optional payload
  constructor(public payload: Weatheritem) {}
}
export type WeatherAction = AddItemAction;
