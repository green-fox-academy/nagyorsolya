'use strict';

// -  Create a variable named `ai` with the following content: `[3, 4, 5, 6, 7]`
// -  Log the sum of the elements in `ai` to the console

let ai: number [] = [3, 4, 5, 6, 7];

let aiSummed = ai.reduce(function (summaryValue:number, currentNumber: number) {
  return summaryValue += currentNumber;    
},0);

console.log(aiSummed);