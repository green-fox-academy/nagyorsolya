import {Main} from './Main';
import {Sys} from './Sys';
import {City} from './City';

export interface Weather {
  name: string;
  main: Main;
  sys: Sys;
  list: [];
  id: number;
  city: City;
  weather: weather;
}

export interface weather {
  icon: string;
}