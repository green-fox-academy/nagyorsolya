import { Component, OnInit, Input } from '@angular/core';
import { Weather} from '../models/Weather';
import { ApiService } from '../services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-searchbyid',
  templateUrl: './searchbyid.component.html',
  styleUrls: ['./searchbyid.component.css']
})
export class SearchbyidComponent implements OnInit {

  @Input() city: Weather;
  @Input() response: Weather;

  nameOfCity: string;
  nameOfCountry: string;
  url: string = "http://openweathermap.org/img/w/";
  urlEnd: string = ".png";

  constructor(private route: ActivatedRoute, private svc: ApiService) { }

  ngOnInit() {
    if (this.route.snapshot.params['id']) {
      this.svc.getWeatherInfo(this.route.snapshot.params['id']).subscribe(
        (weather: Weather) => {
          console.log(weather);
          this.response = weather;
          this.nameOfCity = weather.city.name;
          this.nameOfCountry = weather.city.country;
        },
        error => {
          console.log(error);
        }
      );
    }
    else {
    this.nameOfCity = this.response.city.name;
    this.nameOfCountry = this.response.city.country;
    }
  }

}
