import { Component, Input } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Weather } from "./models/Weather";
import { ApiService } from "./services/api.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  city = {
    name: "London",
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
  icon: string;

  constructor(private apiSvc: ApiService, private route: Router) {}

  ngOnInit() {
    this.apiSvc.getThreeCityInfo().subscribe(
      (weather: Weather) => {
        this.response = weather;
        console.log(weather);
      },
      error => (this.error = error)
    );

    //this.search = this.route.snapshot.paramMap.get("city");
    console.log(this.search);
  }
  onSearch() {
    this.viewChanger = true;
    this.apiSvc.getWeatherInfo(this.search).subscribe(
      (weather: Weather) => {
        this.response = weather;
        if (weather.id) {
          this.icon = `http://openweathermap.org/img/w/${
            weather.weather[0].icon
          }.png`;
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
  temp() {
    this.route.events.subscribe((asd) => {
    console.log(asd);
    
    });
    
  }
}
