'use strict';

let readlineSync = require('readline-sync');
let fs = require('fs');

class Todo {
  name: string;
  isCompleted: boolean = false;
  constructor(newName: string) {
    this.name = newName;
  }
  complete() {
    this.isCompleted = true;
  }
};

let task1 = new Todo ("Walk the dog");
let task2 = new Todo ("Buy Milk");
let task3 = new Todo ("Do homework");

let todoArray: any [] = [];
todoArray.push(task1);
todoArray.push(task2);
todoArray.push(task3);
console.log(todoArray);

for (let i = 0; i < todoArray.length; i++) {
  fs.appendFileSync("todolist.txt", todoArray[i].name + "\n");
};

let input1: string = readlineSync.question(
  'Welcome to my todo app, what would you like to add today? '
);

if (input1 === "") {
  console.log(`Command Line Todo application
  =============================
  
  Command line arguments:
   -l   Lists all the tasks
   -a   Adds a new task
   -r   Removes a task
   -c   Completes a task`);
}

if (input1 === "-l") {
  
}
/*
let content: string = fs.readFileSync("todolist.txt", "utf-8")
let goodContent: any [] = content.split("\n")

function removeChars(array: any) {
  let something: any[] = [];
  for (let i = 0; i < array.length; i++) {
    something[i] = array[i].replace("\r", "");
  }
  return something;
}
goodContent = removeChars(goodContent); */

/*
let input2: string = readlineSync.question(
  ''
);
if (input2 === "-l") {
  goodContent.forEach(function (item: string, index: number) {
    console.log(index - 1 + " [ ] ", item);
  })
}
else if (input2 === "-a") {
  let input3: string = readlineSync.question(
    'Please type your new task to be added to the list:'
  );
  let newItem = new Todo(input3)
  goodContent.push(newItem.name);
  fs.appendFileSync("todolist.txt", "\n" + goodContent);
}
else if (input2 === "-c") {
  console.log('Please write the number of the task to complete:');

  let input4: number = readlineSync.question("");
  console.log(input4);

  for (let i = 0; i < goodContent.length; i++) {
    if (goodContent[input4 - 1] === input4) {
      goodContent[input4 - 1].isCompleted = true;
    }
  }
  console.log(goodContent[input4 - 1].isCompleted);
}

/*else if (input1 === "-r") {
  goodContent.replace(input1,"")
}*/

