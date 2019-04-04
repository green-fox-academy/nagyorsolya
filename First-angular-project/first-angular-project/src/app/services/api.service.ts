import { Injectable } from "@angular/core";
import { Weather } from "../models/Weather";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
//import "rxjs/add/observable/throw";
import { catchError } from "rxjs/operators";
import { throwError } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getWeatherInfo(searchedCity) {
    let numberArray: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let isNumber: boolean;
    let cityNumber: number;
    for (let i: number = 0; i < numberArray.length; i++) {
      if (parseInt(searchedCity[0]) === numberArray[i]) {
        cityNumber = numberArray[i];
      }
    }
    if (cityNumber != undefined) {
      isNumber = true;
      return this.http
        .get(
          `http://api.openweathermap.org/data/2.5/forecast?id=${searchedCity}&APPID=038c9e2c668ad22deb7e56ab239a1551`
        )
        .pipe(catchError(this.errorHandler));
    } else {
      isNumber = false;
      return this.http
        .get(
          `http://api.openweathermap.org/data/2.5/weather?q=${searchedCity}&APPID=038c9e2c668ad22deb7e56ab239a1551`
        )
        .pipe(catchError(this.errorHandler));
    }
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || "Server error");
  }

  getThreeCityInfo() {
    return this.http
      .get(
        "http://api.openweathermap.org/data/2.5/group?id=524901,703448,2643743&units=metric&APPID=038c9e2c668ad22deb7e56ab239a1551"
      )
      .pipe(catchError(this.errorHandler));
  }
}
