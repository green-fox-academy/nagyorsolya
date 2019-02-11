'use strict';

let readlineSync = require('readline-sync');

// Write a program that asks for a number.
// It would ask this many times to enter an number,
// if all the numbers are entered, it should print the sum and average of these
// numbers like:
//
// Sum: 22, Average: 4.4

let input1: string = readlineSync.question(
  'Please enter a number:'
);

function askQuestion (inputNumber: any) {
  let numArray: any [] = [];
  let sumOfArray: number = 0;
  let averageOfArray: number = 0;
  for (let i = 0; i < inputNumber; i++) {
    numArray.push(readlineSync.question(
      'Please enter number # '+ (i+1) + ": "
    ));
  }
  for (let j = 0; j < numArray.length; j++) {
    numArray[j] = parseInt(numArray[j])
    sumOfArray += numArray[j];
  }
  console.log(`The entered numbers are: ` + numArray);
  console.log(`The sum of the entered numbers is: ` + sumOfArray);
  console.log(`The average of the entered numbers is:` + sumOfArray/parseInt(input1));
}

askQuestion(input1);

