import { Component, Input } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Weather } from "./models/Weather";
import { ApiService } from "./services/api.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  city = {
    name: "",
    search: "",
    temperature: 0,
    country: ""
  };

  @Input() cityNumber: number;

  search: string;
  response: Weather;
  error: string;
  viewChanger: boolean = false;
  cityID: number;

  constructor(private apiSvc: ApiService) {}

  ngOnInit() {
    this.apiSvc.getThreeCityInfo().subscribe(
      (weather: Weather) => {
        this.response = weather;
      },
      error => (this.error = error)
    );
  }

  onSearch() {
    this.viewChanger = true;
    this.apiSvc.getWeatherInfo(this.search).subscribe(
      (weather: Weather) => {
        this.response = weather;
        if (weather.id) {
          this.cityID = weather.id;
          this.city.name = weather.name;
          this.city.temperature = Math.floor(weather.main.temp - 273);
          this.city.country = weather.sys.country;
        }
      },
      error => {
        this.error = error;
      }
    );
  }
}
