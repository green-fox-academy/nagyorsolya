'use strict';

import { StringDecoder } from "string_decoder";


export { }

abstract class Instrument {
  protected _name: string;
  play(): void { };
}
abstract class StringedInstrument extends Instrument {
  numberOfStrings: number;
  constructor (newNumberOfStrings: number) {
    super();
    this.numberOfStrings = newNumberOfStrings;
  }
  sound(): void {};
  play(): void {
    console.log(`${this._name}, a ${this.numberOfStrings}-stringed instrument that goes ${this.sound()}`)
  }
}

class ElectricGuitar extends StringedInstrument {
  _name: string = "Electric Guitar";
  constructor(newNumberOfStrings: number = 6) {
    super(newNumberOfStrings)
  }
  sound() {
    return "Twang";
  }
}

class BassGuitar extends StringedInstrument {
  _name: string = "Bass Guitar";
  constructor(newNumberOfStrings: number = 4) {
    super(newNumberOfStrings)
  }
  sound() {
    return "Duum-duum-duum";
  }
}

class Violin extends StringedInstrument {
  _name: string = "Violin";
  constructor(newNumberOfStrings: number = 4) {
    super(newNumberOfStrings)
  }
  sound() {
    return "Screech";
  }
}

console.log('Test 1, create Electric Guitar, Bass Guitar and Violin with default strings.');
let guitar = new ElectricGuitar();
let bassGuitar = new BassGuitar();
let violin = new Violin();

console.log('Test 1 Play');
guitar.play();
bassGuitar.play();
violin.play();

console.log('Test 2, create Electric Guitar, Bass Guitar with 7 and 5 strings .');
let guitar2 = new ElectricGuitar(7);
let bassGuitar2 = new BassGuitar(5);

console.log('Test 2 Play');
guitar2.play();
bassGuitar2.play();