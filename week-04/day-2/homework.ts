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
  constructor (newName: string = "Jane Doe", newAge: number = 30, newGender: string = "female") {   
    this.name = newName;
    this.age = newAge;
    this.gender = newGender;
}
  introduce(info?: any) {
    if (!info) {
      info = "";
    }
    else {
      info  = info;
    }
    console.log("Hi, I'm " + this.name + " a " + this.age + " year old " + this.gender + info);

  }
  getGoal () {
    console.log("My goal is: Live for the moment!")
  }
}

class Cohort {
  name: string;
  students: Student [];
  mentors: Mentor [];
  constructor (newCohortName: string, newStudents: Student [] = [], newMentors: Mentor [] = []) {
    this.name = newCohortName;
    this.students = newStudents;
    this.mentors = newMentors;
  }
  addStudent (newStudent: Student) {
    this.students.push(newStudent);
  }
  addMentor (newMentor: Mentor) {
    this.mentors.push(newMentor);
  }
  info () {
    console.log("The " + this.name + " cohort has " + this.students.length + " students and " + this.mentors.length + " mentors.")
  }
}

class Sponsor extends Person {
  company: string;
  hiredStudents: number;
  constructor (newName: string = "Jane Doe", newAge: number = 30, newGender: string = "female", newCompany: string = "Google", newHiredStudents: number = 0) {
    super(newName, newAge, newGender);
    this.company = newCompany;
    this.hiredStudents = newHiredStudents;
  }
  introduce () {
   super.introduce (" who represents " + this.company + " and hired " + this.hiredStudents + " so far.");
  }
  hire () {
    this.hiredStudents++;
  }
  getGoal () {
    console.log("My goal is: Hire brilliant junior software developers.");
  }
}

class Mentor extends Person {
  level: string;
  constructor (newName: string = "Jane Doe", newAge: number = 30, newGender: string = "female", newLevel: string = "intermediate") {
    super(newName, newAge, newGender);
    this.level = newLevel;
      }
  getGoal () {
    console.log("My goal is: Educate brilliant junior software developers.");
  }
  introduce () {
   super.introduce(" " + this.level + " mentor.");
  }
}

class Student extends Person {
  previousOrganization: string;
  skippedDays: number;
  constructor (newName: string = "Jane Doe", newAge: number = 30, newGender: string = "female", newpreviousOrganization: string = "The School of Life", newSkippedDays: number = 0) {
  super(newName, newAge, newGender);
  this.skippedDays = newSkippedDays;
  this.previousOrganization = newpreviousOrganization;
}
getGoal() {
  console.log("Be a junior software developer.");
}
introduce() {
 super.introduce(" from " + this.previousOrganization + " who skipped " + this.skippedDays + " days from the course already.");
}
skipDays(numberOfDays: number) {
 this.skippedDays += numberOfDays;
}
}

let people = [];

let mark = new Person('Mark', 46, 'male');
people.push(mark);

let jane = new Person();
people.push(jane);

let john = new Student('John Doe', 20, 'male', 'BME');
people.push(john);

let student = new Student();
people.push(student);

let gandhi = new Mentor('Gandhi', 148, 'male', 'senior');
people.push(gandhi);

let mentor = new Mentor();
people.push(mentor);

let elon = new Sponsor('Elon Musk', 46, 'male', 'SpaceX');
people.push(elon);

let sponsor = new Sponsor();
people.push(sponsor);

student.skipDays(3);

for (let i = 0; i < 6; i++) {
  elon.hire();
}

for (let i = 0; i < 4; i++) {
  sponsor.hire();
}

for (let person of people) {
  person.introduce();
  person.getGoal();
}

let awesome = new Cohort('AWESOME');
awesome.addStudent(student);
awesome.addStudent(john);
awesome.addMentor(mentor);
awesome.addMentor(gandhi);
awesome.info();