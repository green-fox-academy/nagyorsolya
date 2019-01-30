import { Thing } from "./thing";
import { Fleet } from "./fleet";

let fleet = new Fleet();

/* Crete a fleet of things to have this output:
1. [ ] Get milk
2. [ ] Remove the obstacles
3. [x] Stand up
4. [x] Eat lunch
// Hint: You have to create a `print()` method as well */

let thing1 = new Thing ("Get Milk");
let thing2 = new Thing ("Remove the obstacles");
let thing3 = new Thing ("Stand up");
let thing4 = new Thing ("Eat lunch");

thing3.complete();
thing4.complete();
fleet.add(thing1);
fleet.add(thing2);
fleet.add(thing3);
fleet.add(thing4);

function writeList (a) {
let b = a.things;
  for (let i = 0; i <b.length; i++) {
    if (b[i].completed) {
      console.log("[x] " + b[i].name);
    }
    else {
      console.log("[ ] " + b[i].name);
    }
  }
  return a;
};

writeList(fleet);
