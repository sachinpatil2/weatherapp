import { Injectable } from "@angular/core";
//import actions and effects
import { createEffect, Actions, ofType } from "@ngrx/effects";
//import our actions
import * as WeatherActions from "../actions/weather.action";

import { switchMap, map, catchError } from "rxjs/operators";

//import the service
import { WeatherService } from "../../weather.service";
import { of } from "rxjs";

@Injectable()
export class WeatherEffects {
  constructor(
    private actions$: Actions,
    private weatherService: WeatherService
  ) {}

  loadWeather$ = createEffect(() =>
    this.actions$.pipe(
      ofType(WeatherActions.FETCH_WEATHER),
      switchMap((action: any) => {
        //must return an observable
        return this.weatherService.getWeatherForCity(action.payload).pipe(
          //map the result
          map((data) => ({
            type: WeatherActions.FETCH_WEATHER_SUCCESS,
            payload: data,
          })),
          catchError((err) => {
            //call the action if there is an error
            return of(new WeatherActions.FetchWeatherFail(err["message"]));
          })
        );
      })
    )
  );
}
