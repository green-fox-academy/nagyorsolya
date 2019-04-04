import { Component, OnInit, Input } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {Weather} from '../../models/Weather';


@Component({
  selector: "app-cities",
  templateUrl: "./cities.component.html",
  styleUrls: ["./cities.component.css"]
})



export class CitiesComponent implements OnInit {
  @Input() city: Weather;
  @Input() response: Weather;
  @Input() isNumber: boolean;

url: string = "https://github.com/green-fox-academy/teaching-materials/blob/master/project-phase/0th-week-projects/angular/weather-app/assets/icons/cloudy.png?raw=true";

  constructor() {}

  ngOnInit() {
  }
}
