import { Component, OnInit } from "@angular/core";
import { WeatherService } from "../weather.service";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
import { map, filter, concatMap, tap } from "rxjs/operators";
import { Store } from "@ngrx/store";
import { Weatheritem } from "../store/models/weather.model";
import { State } from "../store/models/state.model";

@Component({
  selector: "app-weather-report",
  templateUrl: "./weather-report.component.html",
  styleUrls: ["./weather-report.component.scss"],
})
export class WeatherReportComponent implements OnInit {
  data$: Observable<any> = this.store.select((state) => {
    console.log(state);
    return state.weather;
  });

  today: Date = new Date();

  loading = false;

  constructor(private store: Store<State>) {}

  ngOnInit() {}
}
