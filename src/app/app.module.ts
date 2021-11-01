import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { MatCardModule } from "@angular/material/card";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSelectModule } from "@angular/material/select";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatButtonModule } from "@angular/material/button";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { WeatherReportComponent } from "./weather-report/weather-report.component";
import { HttpClientModule } from "@angular/common/http";
import { StoreModule } from "@ngrx/store";
import { weatherReducer } from "./store/reducer/weather.reducer";
import { EffectsModule } from "@ngrx/effects";

const routes: Routes = [
  {
    path: "",
    component: WeatherReportComponent,
  },
  {
    path: ":locationName",
    component: WeatherReportComponent,
  },
];

@NgModule({
  declarations: [AppComponent, WeatherReportComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    StoreModule.forRoot({
      weather: weatherReducer,
    }),
    MatCardModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatSelectModule,
    RouterModule.forRoot(routes, { relativeLinkResolution: "legacy" }),
    MatProgressBarModule,
    HttpClientModule,
    MatButtonModule,
    EffectsModule.forRoot([]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}