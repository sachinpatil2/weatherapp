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

  // it(`should have as title 'rxjs-angular-weather'`, () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.componentInstance;
  //   expect(app.title).toEqual('rxjs-angular-weather');
  // });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement;
  //   expect(compiled.querySelector('.content span').textContent).toContain('rxjs-angular-weather app is running!');
  // });
});
