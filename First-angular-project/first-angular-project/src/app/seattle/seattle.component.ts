import { Component, OnInit } from '@angular/core';
import {Weather} from '../app-interfaces'
import {Name} from '../app-interfaces';
import {WeatherSpecs} from '../app-interfaces';
import {MainObj} from '../app-interfaces';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-seattle',
  templateUrl: './seattle.component.html',
  styleUrls: ['./seattle.component.css']
})
export class SeattleComponent implements OnInit {

  seattle: Name;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('http://api.openweathermap.org/data/2.5/weather?q=Seattle&APPID=038c9e2c668ad22deb7e56ab239a1551').subscribe((response: Weather) => { 
     this.seattle = response.name; });
  }

}
