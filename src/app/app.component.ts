import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormControl, NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { Subject, Observable } from "rxjs";
import { takeUntil, map } from "rxjs/operators";
import { Store } from "@ngrx/store";
import { Weatheritem } from "./store/models/weather.model";
import { State } from "./store/models/state.model";
import { FetchWeather } from "./store";
// import { AddItemAction } from "./store/actions/weather.action";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit, OnDestroy {
  private unsubscribe$ = new Subject<void>();

  // cities = ["London", "New York", "Moscow", "Karachi"];

  countries = [
    {
      name: "United Kingdom",
      cities: ["London", "Warwick", "Birmingham"],
    },
    {
      name: "United States",
      cities: ["New York", "Chicago", "Washington"],
    },
    {
      name: "Australia",
      cities: ["Sydney", "Adelaide", "Melbourne"],
    },
    {
      name: "India",
      cities: ["New Delhi", "Mumbai", "Pune", "Kolkata"],
    },
  ];

  countryControl: FormControl;
  cityControl: FormControl;

  cities$: Observable<string>;

  weatherItem$: Observable<Weatheritem>;
  constructor(private router: Router, private store: Store<State>) {}

  ngOnInit() {
    this.weatherItem$ = this.store.select((store) => store.weather);

    this.cityControl = new FormControl("");
    this.cityControl.valueChanges
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((value) => {
        this.router.navigate([value]);
        this.store.dispatch(new FetchWeather(value));
      });

    this.countryControl = new FormControl("");

    this.cities$ = this.countryControl.valueChanges.pipe(
      map((country) => country.cities)
    );
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
