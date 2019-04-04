import { Injectable } from "@angular/core";
import { Weather } from "../models/Weather";
import { HttpClient, HttpErrorResponse} from "@angular/common/http";
//import "rxjs/add/observable/throw";
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';


@Injectable({
  providedIn: "root"
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getWeatherInfo(searchedCity) {
    return this.http
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${searchedCity}&APPID=038c9e2c668ad22deb7e56ab239a1551`
      )
      .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || "Server error");
  }

  getThreeCityInfo() {
    return this.http.get(
      "http://api.openweathermap.org/data/2.5/group?id=524901,703448,2643743&units=metric&APPID=038c9e2c668ad22deb7e56ab239a1551"
    ).pipe(catchError(this.errorHandler));
  }
}
