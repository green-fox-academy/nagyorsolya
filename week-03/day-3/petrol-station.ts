'use strict';

/* Create a Station and a Car classes
Station
gasAmount
refill(car) -> decreases the gasAmount by the capacity of the car and increases the cars gasAmount
Car
gasAmount
capacity
create constructor for Car where:
initialize gasAmount -> 0
initialize capacity -> 100 */

class Station {
  gasAmount: number;
  refill(car: Car) {
    this.gasAmount -= car.capacity;
    car.gasAmount += car.capacity;
  }
};

class Car {
  gasAmount: number;
  capacity: number;
  constructor (newGasAmount: number = 0, newCapacity: number = 100) {
    this.gasAmount = newGasAmount;
    this.capacity = newCapacity;
  }
};

const station = new Station;
station.gasAmount = 500;
const car = new Car();
console.log(station);
console.log(car);
station.refill(car);
console.log(station);
console.log(car);