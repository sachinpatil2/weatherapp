import { TestBed, waitForAsync } from "@angular/core/testing";
import { AppComponent } from "./app.component";
import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";

import { WeatherService } from "./weather.service";
import { RouterModule, Routes } from "@angular/router";
import { WeatherReportComponent } from "./weather-report/weather-report.component";

describe("AppComponent", () => {
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
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [AppComponent],
        imports: [
          HttpClientTestingModule,
          RouterModule.forRoot(routes, { relativeLinkResolution: "legacy" }),
        ],
        providers: [WeatherService],
      }).compileComponents();
    })
  );

  it("should create the app", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();
    expect(app).toBeTruthy();
  });
});
