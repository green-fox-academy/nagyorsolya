'use strict';

/*Create Student and Teacher classes
Student
learn()
question(teacher) -> calls the teachers answer method
Teacher
teach(student) -> calls the students learn method
answer()*/

class Student {
  learn() {
    return "The student learned.";
  }
  questions(newTeacher: Teacher) {
    return  newTeacher.answer();
  }
}

class Teacher {
  answer() {
    return "The teacher answered the student's question.";
  }
  teach(newStudent: Student) {
    return newStudent.learn();
  }
};

let student1 = new Student();
let teacher1 = new Teacher();

console.log(student1.learn());
console.log(teacher1.teach(student1));
console.log(student1.questions(teacher1));