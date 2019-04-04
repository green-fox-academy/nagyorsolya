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

  constructor() { }

  ngOnInit() {
    console.log(this.response);
    console.log(this.response.city);
    this.nameOfCity = this.response.city.name;
    console.log(this.nameOfCity);
    this.nameOfCountry = this.response.city.country;
    console.log(this.nameOfCountry);

  }

}
