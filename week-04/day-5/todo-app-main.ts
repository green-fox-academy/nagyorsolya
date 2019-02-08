'use strict';

let readlineSync = require('readline-sync');

export let todoItem: string = readlineSync.question(
  'Welcome to my todo app, what would you like to add today? '
);

if (todoItem === '') {
  console.log(`Command Line Todo application
  =============================
  
  Command line arguments:
   -l   Lists all the tasks
   -a   Adds a new task
   -r   Removes an task
   -c   Completes an task`);
}