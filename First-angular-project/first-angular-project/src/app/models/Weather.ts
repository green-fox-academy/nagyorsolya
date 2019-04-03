import {Main} from './Main';
import {Sys} from './Sys';

export interface Weather {
  name: string;
  main: Main;
  sys: Sys;
  list: [];
}