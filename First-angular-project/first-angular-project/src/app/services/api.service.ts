import { Injectable } from "@angular/core";
import { Weather } from "../models/Weather";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ApiService {

  constructor(private http: HttpClient) {}

  
    getWeatherInfo(searchedCity) {
     return this.http
        .get(
          `http://api.openweathermap.org/data/2.5/weather?q=${searchedCity}&APPID=038c9e2c668ad22deb7e56ab239a1551`
        );
    }

    getThreeCityInfo () {
      return this.http
        .get("http://api.openweathermap.org/data/2.5/group?id=524901,703448,2643743&units=metric&APPID=038c9e2c668ad22deb7e56ab239a1551"
        );
    }

  }
