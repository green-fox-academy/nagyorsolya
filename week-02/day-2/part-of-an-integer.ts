'use strict';

//  Create a function that takes a number and a list of numbers as a parameter
//  Returns the indeces of the numbers in the list where the first number is part of
//  Returns an empty list if the number is not part any of the numbers in the list

function subint(inputNum: number, inputArr: number[]) {
  let inputArrString: string[] = [];
  let resultIndeces: number[] = [];
  let inputNumStringed: string = inputNum.toString();
  for (let i: number = 0; i < inputArr.length; i++) {
    inputArrString.push(inputArr[i].toString());
  }
  for (let j: number = 0; j < inputArrString.length; j++) {
    if (inputArrString[j].indexOf(inputNumStringed) >= 0) {
      resultIndeces.push(j);
    }
  }
  return resultIndeces;
};


// Example
console.log(subint(1, [1, 11, 34, 52, 61]));
// should print: `[0, 1, 4]`
console.log(subint(9, [1, 11, 34, 52, 61]));
// should print: '[]'