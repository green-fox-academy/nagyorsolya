'use strict';

let microChipNumber = 0;

class AnimalShelter {
  animals: Animal [] = [];
  budget: number = 50;
  adopters: string [] = [];
  rescue(newAnimal: Animal) {
    this.animals.push(newAnimal);
    return this.animals.length;
  }
  heal() {
    let healedAnimals: number = 0;
    for (let i: number = 0; i < this.animals.length; i++) {
      if (!this.animals[i].isHealthy && this.animals[i].healCost <= this.budget){ //-0.5
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
  findNewOwner () { //Nézni kell hogy adoptabe-e -0,5
    
    let randomNum2: number = generateRandomNumber(0,this.adopters.length);
    let healthyAnimals: any [] = [];
    for (let i:number = 0; i < this.animals.length; i++) {
      if (this.animals[i].isHealthy === true) {
        healthyAnimals.push(this.animals[i]);
      }
    }
    let randomNum1: number = generateRandomNumber(0,healthyAnimals.length);

    if (healthyAnimals[randomNum1] && this.adopters[randomNum2]) {
      for (let i:number = 0; i < this.animals.length; i++) {

        if ( healthyAnimals[randomNum1].microChip === this.animals[i].microChip) {
          this.animals.splice(i,1);
      }
    }
    this.adopters.splice(randomNum2,1);
  };
};
  earnDonation(donationAmount: number) {
    return this.budget += donationAmount;
  }
  toString () { //-0,5
    let retVal:string =`Budget: ${this.budget}, there are ${this.animals.length} animal(s)
    and ${this.adopters.length} potential adopter(s).\n`;
    for(let i:number = 0; i<this.animals.length;i++)
    {
      retVal += this.animals[i].toString() + "\n";
    }
    return  retVal;
  }
}

class Animal {
  name: string;
  isHealthy: boolean;
  healCost: number;
  microChip: number;
  //How the fuck am I supposed to do that?
  constructor(newName: string, newMicroChip: number = microChipNumber++) {
    this.name = newName;
    this.microChip = newMicroChip;
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
  constructor (newName: string = "Cat") {
    super(newName);
  }
  healCost: number = generateRandomNumber(0, 6);
}

class Dog extends Animal {
  constructor (newName: string = "Dog") {
    super(newName);
  }
  healCost: number = generateRandomNumber(1, 8);
}

class Parrot extends Animal {
  constructor (newName: string = "Parrot") {
    super(newName);
  }
  healCost: number = generateRandomNumber(4, 10);
}
//This function will generate the random healing cost numbers
function generateRandomNumber(min_value, max_value) {
  let newNumber: number = 0;
  newNumber = Math.random() * (max_value - min_value) + min_value;
  return Math.floor(newNumber);
}

let animalShelter = new AnimalShelter();

animalShelter.rescue(new Cat());
animalShelter.rescue(new Dog("Furkesz"));
animalShelter.rescue(new Parrot());
console.log(animalShelter.toString());

animalShelter.heal();
console.log(animalShelter.toString());

animalShelter.addAdopter("Kond");
console.log(animalShelter.toString());

animalShelter.findNewOwner();
animalShelter.earnDonation(30);
console.log(animalShelter.toString());