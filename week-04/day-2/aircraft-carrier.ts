'use strict';

class Aircraft {
  maxAmmo: number;
  baseDamage: number;
  currentAmmo: number = 0;
  fight(): number {
    let damage: number = this.baseDamage * this.currentAmmo;
    this.currentAmmo = 0;
    return damage;
  }
  refill(inputNum: number) {
    let counter: number = 0;
    for (let i: number = this.currentAmmo; i < this.maxAmmo;i++) {
      if (this.currentAmmo < this.maxAmmo) {
        
      }
    }
  }
}

class F16 extends Aircraft {
  maxAmmo: number = 8;
  baseDamage: number = 30;
}

class F35 extends Aircraft {
  maxAmmo: number = 12;
  baseDamage: number = 50;
}