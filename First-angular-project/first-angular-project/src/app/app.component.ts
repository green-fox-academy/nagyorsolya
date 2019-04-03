import { Component } from "@angular/core";
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

  search: string;
  response: Weather;

  constructor(private apiSvc: ApiService) {}

  ngOnInit() {
    this.apiSvc.getThreeCityInfo().subscribe((weather: Weather) => {
      //console.log(weather);
      this.response = weather;
    });
  }

  onSearch() {
    this.apiSvc.getWeatherInfo(this.search).subscribe((weather: Weather) => {
      this.city.name = weather.name;
      this.city.temperature = weather.main.temp;
      this.city.country = weather.sys.country;
      console.log(weather.sys.country);
    });
  }
}
