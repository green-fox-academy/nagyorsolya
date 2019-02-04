/* Create a Person class with the following fields:

name: the name of the person
age: the age of the person (whole number)
gender: the gender of the person (male / female)
And the following methods:

introduce(): prints out "Hi, I'm name, a age year old gender."
getGoal(): prints out "My goal is: Live for the moment!"
And the following constructors:

Person(name, age, gender)
Person(): sets name to Jane Doe, age to 30, gender to female */

class Person {
  name: string;
  age: number;
  gender: string;
  constructor (newName?, newAge?, newGender?) {
    if (!newName && !newAge && !newGender) {
      this.name = "Jane Doe";
      this.age = 30;
      this.gender = "female";
    }
    else {
    this.name = newName;
    this.age = newAge;
    this.gender = newGender;
  }
}
  introduce() {
    console.log("Hi, I'm " + this.name + " a " + this.age + " year old " + this.gender);
  }
  getGoal () {
    console.log("My goal is: Live for the moment!")
  }

}

class Student extends Person {
  previousOrganization: string;
  skippedDays: number;
  constructor (prevSchool?: string, newAge?: number, newName?: string, newGender?: string) {
  super(newAge);
  super(newName);
  super(newGender);
  this.skippedDays = 0;
  if (!prevSchool) {
    this.previousOrganization = "The School of Life"
  }
  else {
    this.previousOrganization = prevSchool;
  }
}
getGoal() {
  console.log("Be a junior software developer.");
}
introduce() {
  super.introduce() + " from" + this.previousOrganization + "who skipped " + this.skippedDays + " days from the course already."
}
skipDays(numberOfDays: number) {
 this.skippedDays += numberOfDays;
}
}

let Geri = new Student ("OE");
console.log(Geri);
