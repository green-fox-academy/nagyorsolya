'use strict';
// Check if array contains all of the following elements: 4,8,12,16
// Create a function that accepts 'listOfNumbers' as an input
// it should return "true" if it contains all, otherwise "false"

let listOfNumbers: number[] = [2, 4, 6, 8, 10, 12, 14, 16];

function checkNums(a: number[]) {
  let result: boolean = undefined;
  let first: boolean = undefined;
  let second: boolean = undefined;
  let third: boolean = undefined;
  let forth: boolean = undefined;
  for (let i = 0; i < a.length; i++) {
    if (a[i] === 4) {
      first = true;
    }
      else if (a[i] === 8) {
      second = true;
    }
      else if (a[i] === 12) {
      third = true;
    }
      else if (a[i] === 16) {
      forth = true;
    };
    result = first && second && third && forth;
  };
  if (result) {
    console.log(true);
  }
  else {
    console.log(false);
  };
};

checkNums(listOfNumbers);