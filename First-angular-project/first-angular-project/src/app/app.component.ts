import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Weather} from './app-interfaces'
import {Name} from './app-interfaces';
import {WeatherSpecs} from './app-interfaces';
import {MainObj} from './app-interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-angular-project';
  inputText: string;

constructor(private http: HttpClient) {

}

ngOnInit () {
}


}
