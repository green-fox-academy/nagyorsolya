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
  constructor(newNumberOfStrings: number) {
    super(newNumberOfStrings)
  }
  sound() {
    return "Twang";
  }
}

class BassGuitar extends StringedInstrument {
  _name: string = "Bass Guitar";
  constructor(newNumberOfStrings: number = 2) {
    super(newNumberOfStrings)
  }
  sound() {
    return "Duum-duum-duum";
  }
}

class Violin extends StringedInstrument {
  _name: string = "Violin";
  constructor(newNumberOfStrings: number) {
    super(newNumberOfStrings)
  }
  sound() {
    return "Screech";
  }
}

let guitar = new ElectricGuitar(6);
let bassGuitar = new BassGuitar(4);
let violin = new Violin(4);

guitar.play();
bassGuitar.play();
violin.play();