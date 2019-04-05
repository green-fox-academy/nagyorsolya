import { Component, OnInit, Input } from '@angular/core';
import { Weather} from '../models/Weather';

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

  constructor() { }

  ngOnInit() {

    this.nameOfCity = this.response.city.name;
    this.nameOfCountry = this.response.city.country;

  }

}
