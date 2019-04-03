'use strict';

export interface MainObj {
temperature: number;
name: string;
}

export interface WeatherSpecs {
main: string;
name: string;
description: string;
}

export interface Name {
  name: string;
}

export interface Weather{
main: MainObj,
weather: WeatherSpecs[],
name: Name;
}