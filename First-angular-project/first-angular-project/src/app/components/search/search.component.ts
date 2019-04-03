import { Component, OnInit, Input } from '@angular/core';
import { Weather } from 'src/app/models/Weather';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Input() response:Weather;

  constructor() { }

  ngOnInit() {
  }

}
