'use strict';

class Aircraft {
  maxAmmo: number;
  baseDamage: number;
  currentAmmo: number = 0;
  type: string;
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
    return `Type: ${this.type}, Ammo: ${this.currentAmmo}, Base Damage: ${this.baseDamage}, All Damage: ${this.baseDamage*this.maxAmmo}`
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
}

class F35 extends Aircraft {
  type: string = "F35";
  maxAmmo: number = 12;
  baseDamage: number = 50;
}

class AircraftCarrier {
  listOfAircrafts: Aircraft[] = [];
  ammoStore: number;
  initialAmmo: number;
  healthPoint: number;
  constructor (newInitialAmmo: number, newHealthPoint: number) {
    this.initialAmmo = newInitialAmmo;
    this.healthPoint = newHealthPoint;
  }
  add(newAircraft: Aircraft): void{
    this.listOfAircrafts.push(newAircraft);
  }
  fill() {
    let allAmmoNeeded: number = 0;
    let sortedAircrafts: Aircraft [] = [];
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

};
}