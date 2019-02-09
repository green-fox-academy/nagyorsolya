'use strict';

class AnimalShelter {
  animals: Animal[];
  budget: number;
  adopters: string[];
  rescue(newAnimal: Animal) {
    this.animals.push(newAnimal);
    return this.animals.length;
  }
  heal() {
    let healedAnimals: number = 0;
    for (let i: number = 0; i < this.animals.length; i++) {
      if (!this.animals[i].isHealthy && this.animals[i].healCost < this.budget) {
        this.animals[i].heal();
        healedAnimals = 1;
      }
      else {
        healedAnimals = 0;
      }
      break;
    }
    return healedAnimals;
  }
  addAdopter(newAdopter: string) {
    this.adopters.push(newAdopter);
  }
  findNewOwner () {

  }
}

class Animal {
  name: string;
  isHealthy: boolean;
  healCost: number;
  //How the fuck am I supposed to do that?
  constructor(newName: string = typeof Animal) {
    this.name = newName;
  }
  heal() {
    this.isHealthy = true;
  }
  isAdoptable() {
    return this.isHealthy;
  }
  toString() {
    if (this.isHealthy) {
      return `${this.name} is healthy and adoptable.`
    }
    else {
      return `${this.name} is not healthy (healing cost is ${this.healCost} EUR) and not adoptable.`
    }
  }
}

class Cat extends Animal {
  healCost: number = generateRandomNumber(0, 6);
}

class Dog extends Animal {
  healCost: number = generateRandomNumber(1, 8);
}

class Parrot extends Animal {
  healcost: number = generateRandomNumber(4, 10);
}
//This function will generate the random healing cost numbers
function generateRandomNumber(min_value, max_value) {
  let newNumber: number = 0;
  newNumber = Math.random() * (max_value - min_value) + min_value;
  return Math.floor(newNumber);
}