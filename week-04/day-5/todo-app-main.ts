'use strict';

let readlineSync = require('readline-sync');
let fs = require('fs');
let content: string = fs.readFileSync("todolist.txt", "utf-8")
let goodContent: any [] = content.split("\n")
let taskList: object [] = [];

function removeChars (array: any) {
  let something: any [] = [];
for (let i = 0; i < array.length; i++) {
something[i] = array[i].replace("\r", "");
}
return something;
}
goodContent = removeChars(goodContent);

let input1: string = readlineSync.question(
  'Welcome to my todo app, what would you like to add today? '
);

if (input1 === "") {
  console.log(`Command Line Todo application
  =============================
  
  Command line arguments:
   -l   Lists all the tasks
   -a   Adds a new task
   (Please add a space and then write your task to be added.)
   -r   Removes a task
   -c   Completes a task`);
}

let input2: string = readlineSync.question(
  ''
);
if (input2 === "-l") {
  goodContent.forEach(function(item: string,index: number) {
    console.log(index + " [ ] ", item);
  })
}
else if (input2 === "-a") {
  let input3: string = readlineSync.question(
    'Please type your new task to be added to the list:'
  );
  goodContent.push(input3);
  fs.appendFileSync("todolist.txt", "\n" + goodContent);
}
/*else if (input2[0] === "-" && input2[1] === "a") {
 let splitTodo = input2.substring(3);
 console.log(splitTodo);
 goodContent.push(splitTodo);
 console.log(goodContent);
 fs.appendFileSync("todolist.txt", "\n" + goodContent);
}*/
/*else if (input1 === "-r") {
  goodContent.replace(input1,"")
}*/

