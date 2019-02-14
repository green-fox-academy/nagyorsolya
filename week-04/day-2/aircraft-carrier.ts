'use strict';

class Aircraft {
  maxAmmo: number;
  baseDamage: number;
  currentAmmo: number;
  type: string;
  constructor(newcurrentAmmo: number = 0) {
    this.currentAmmo = newcurrentAmmo;
  }
  fight(): number {
    let damage: number = this.baseDamage * this.currentAmmo;
    this.currentAmmo = 0;
    return damage;
  }
  refill(inputNum: number): number {
    let counter: number = 0;
    for (let i: number = this.currentAmmo; i < this.maxAmmo; i++) {
      if (this.currentAmmo < this.maxAmmo) {
        counter++;
      }
    }
    this.currentAmmo += counter;
    inputNum -= counter;
    return inputNum;
  }
  getType(): string {
    return this.type;
  }
  getStatus(): string {
    return `Type: ${this.type}, Ammo: ${this.currentAmmo}, Base Damage: ${this.baseDamage}, All Damage: ${this.baseDamage * this.maxAmmo}`
  }
  isPriority(): boolean {
    let returnValue: boolean = false;
    if (this.type === "F16") {
      returnValue = false;
    }
    else {
      returnValue = true;
    }
    return returnValue;
  }
}

class F16 extends Aircraft {
  type: string = "F16";
  maxAmmo: number = 8;
  baseDamage: number = 30;
  constructor(newcurrentAmmo: number) {
    super(newcurrentAmmo);
  }
}

class F35 extends Aircraft {
  type: string = "F35";
  maxAmmo: number = 12;
  baseDamage: number = 50;
  constructor(newcurrentAmmo: number) {
    super(newcurrentAmmo);
  }
}

class AircraftCarrier {
  listOfAircrafts: Aircraft[] = [];
  ammoStore: number;
  initialAmmo: number;
  healthPoint: number;
  constructor(newInitialAmmo: number = 0, newHealthPoint: number = 0) {
    this.initialAmmo = newInitialAmmo;
    this.healthPoint = newHealthPoint;
  }
  add(newAircraft: Aircraft): void {
    this.listOfAircrafts.push(newAircraft);
  }
  fill() {
    if (this.ammoStore === 0 || this.ammoStore === undefined) {
      throw new Error("No ammo left in store.")
    };
    let allAmmoNeeded: number = 0;
    let sortedAircrafts: Aircraft[] = [];
    //This will count how much ammo is needed by counting all the 'missing ammos' from the aircrafts
    for (let i: number = 0; i < this.listOfAircrafts.length; i++) {
      allAmmoNeeded += this.listOfAircrafts[i].maxAmmo - this.listOfAircrafts[i].currentAmmo;
    }
    //This will first push the priority aircrafts into the sortedAircrafts array so they come first
    for (let i: number = 0; i < this.listOfAircrafts.length; i++) {
      if (this.listOfAircrafts[i].isPriority()) {
        sortedAircrafts.push(this.listOfAircrafts[i]);
      }
    }
    //This will add the not priority aircrafts to the end of the sortedAircrafts array
    for (let i: number = 0; i < this.listOfAircrafts.length; i++) {
      if (!this.listOfAircrafts[i].isPriority()) {
        sortedAircrafts.push(this.listOfAircrafts[i]);
      }
    }
    //This will start refilling the ammos starting with the first, priority aircrafts
    //and run until there is no ammo left in the ammo store
    for (let i: number = 0; i < this.listOfAircrafts.length; i++) {
      if (this.ammoStore < allAmmoNeeded) {
        sortedAircrafts[i].refill(this.ammoStore)
      }
      //If the number of the needed ammos is smaller than what's available in the ammo store,
      //it will refill the aircrafts as they appear in order (not prioritized)
      else {
        this.listOfAircrafts[i].refill(this.ammoStore)
      }
    }
    let howMuchAmmoIsLeft: number = this.ammoStore - allAmmoNeeded;
    if (allAmmoNeeded > this.ammoStore) {
      howMuchAmmoIsLeft = 0;
    }
    return `${howMuchAmmoIsLeft} ammo left in ammostore.`
  }
  fight(enemyAircraftCarrier: AircraftCarrier) {
    let allTheDamage: number = 0;
    for (let i: number = 0; i < this.listOfAircrafts.length; i++) {
      allTheDamage += this.listOfAircrafts[i].baseDamage * this.listOfAircrafts[i].currentAmmo
      this.listOfAircrafts[i].fight();
    }
    enemyAircraftCarrier.healthPoint -= allTheDamage;
    return `Enemy's health points after fight: ${enemyAircraftCarrier.healthPoint}.`
  }
  getStatus() {
    if (this.healthPoint <= 0) {
      return("It's dead Joe :(");
    }
    else {
      for (let i: number = 0; i < this.listOfAircrafts.length; i++) {
        return (`Type: ${this.listOfAircrafts[i].type}, Ammo: ${this.listOfAircrafts[i].currentAmmo},
  Base Damage: ${this.listOfAircrafts[i].baseDamage}, All Damage: ${this.listOfAircrafts[i].baseDamage}`)
      }
    }
  };
}

let repcsi1 = new F16(0);
let repcsi2 = new F16(0);
let repcsi3 = new F16(0);
let repcsi4 = new F35(0);
let repcsi5 = new F35(0);
let repcsi6 = new F35(0);

let repcsihajo = new AircraftCarrier();
let enemyrepcsihajo = new AircraftCarrier(0, 1000);


repcsihajo.add(repcsi1);
repcsihajo.add(repcsi2);
repcsihajo.add(repcsi3);
repcsihajo.add(repcsi4);
repcsihajo.add(repcsi5);
repcsihajo.add(repcsi6);

enemyrepcsihajo.add(repcsi1);
enemyrepcsihajo.add(repcsi2);
enemyrepcsihajo.add(repcsi3);
enemyrepcsihajo.add(repcsi4);
enemyrepcsihajo.add(repcsi5);
enemyrepcsihajo.add(repcsi6);
console.log(enemyrepcsihajo);

repcsihajo.ammoStore = 300;
console.log(repcsihajo.fill());
console.log(repcsihajo.getStatus());

console.log(repcsihajo.fight(enemyrepcsihajo));
console.log(enemyrepcsihajo.getStatus());