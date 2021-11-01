import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { ActivatedRoute, RouterModule, Routes } from "@angular/router";
import { WeatherService } from "../weather.service";

import { WeatherReportComponent } from "./weather-report.component";

describe("WeatherReportComponent", () => {
  let component: WeatherReportComponent;
  let fixture: ComponentFixture<WeatherReportComponent>;

  beforeEach(
    waitForAsync(() => {
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
      TestBed.configureTestingModule({
        declarations: [WeatherReportComponent],
        imports: [
          HttpClientTestingModule,
          RouterModule.forRoot(routes, { relativeLinkResolution: "legacy" }),
        ],
        providers: [WeatherService],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
