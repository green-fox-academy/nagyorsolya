'use strict';

import { pen1, pen2, Sharpie } from './sharpie'

/*Reuse your Sharpie class
Create SharpieSet class
it contains a list of Sharpie
countUsable() -> sharpie is usable if it has ink in it
removeTrash() -> removes all unusable sharpies*/

class SharpieSet {
  sharpies: Sharpie[] = [];
  countUsable() {
    let usableSharpies: Sharpie[] = [];
    for (let i: number = 0; i < this.sharpies.length; i++) {
      if (this.sharpies[i].inkAmount > 0) {
        usableSharpies.push(this.sharpies[i]);
      }
    }
    return usableSharpies;
  }
  removeTrash() {
    for (let i: number = 0; i < this.sharpies.length; i++) {
      if (this.sharpies[i].inkAmount <= 0) {
        this.sharpies.splice(i,1)
      }
    }
    return this.sharpies;
  }
};

let sharpieSet1 = new SharpieSet();

sharpieSet1.sharpies.push(pen1);
sharpieSet1.sharpies.push(pen2);

//console.log(sharpieSet1.sharpies);
//sharpieSet1.countUsable(sharpieSet1.sharpies);

pen2.inkAmount = 0;

console.log(sharpieSet1.countUsable());
console.log(sharpieSet1.removeTrash());