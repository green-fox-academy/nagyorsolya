 import { inherits } from "util";

/*Create a Counter class
which has an integer property
when creating it should have a default value 0 or we can specify it when creating
we can add(number) to increase the counter's value by a whole number
or we can add() without parameters just increasing the counter's value by one
and we can get() the current value as string
also we can reset() the value to the initial value*/

class Counter {
  integer: number = 0;
  initialValue = 0;

  constructor(a) {
    this.integer = a;
  }
  add() {
   this.integer++;
   return this.integer;
  }
  get() {
    return this.integer.toString();
  }
  reset() {
   return this.integer = this.initialValue;
}
}

let abc = new Counter (6);
console.log(abc.reset());

