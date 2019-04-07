import { Component, OnInit, Input } from '@angular/core';
import { Weather } from 'src/app/models/Weather';
import { ApiService } from 'src/app/services/api.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

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

  constructor(private apiSvc: ApiService, private route: Router, private activeRoute: ActivatedRoute) {}

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

  ngOnChanges() {
    this.activeRoute.url.subscribe((asd)=> { 
      console.log(asd);
      
    })
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
    this.route.navigate(['/cities', 'London']);
    this.activeRoute.url.subscribe((asd=> {console.log(asd)}));

  
    
    
  }

}
