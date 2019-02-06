'use strict';
export { }

/*Create a Flyable interface
it should have land, fly and takeOff methods (TakeOff in C#)
Create an abstract Vehicle class
it should have at least 3 fields
Extend Helicopter class from Vehicle
implement your Flyable interface
Extend Bird from your abstract Animal class (zoo exercise)
implement yourˇFlyable interface */

interface Flyable {
  land(): void;
  fly(): void;
  takeOff(): void;
}

abstract class Vehicle {
  color: string;
  speed: number;
  drive(): void { };
}

class Helicopter extends Vehicle implements Flyable {
  land(): void { };
  fly(): void { };
  takeOff(): void { };
  constructor(newColor: string, newSpeed: number) {
    super();
    this.color = newColor;
    this.speed = newSpeed;
  }
}

let heli1 = new Helicopter("black", 2);